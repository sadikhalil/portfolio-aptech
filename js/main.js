// js/main.js

// ========================================
// INTERSECTION OBSERVER FOR SCROLL REVEALS
// ========================================
const setupRevealObserver = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to trigger animation
                entry.target.classList.add('active');
                // Stop observing once revealed
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Store observer globally for use in projects.js
    window.revealObserver = revealObserver;

    // Observe all elements with reveal class
    document.addEventListener('DOMContentLoaded', () => {
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(element => revealObserver.observe(element));
    });

    return revealObserver;
};

// Initialize reveal observer
setupRevealObserver();

// ========================================
// NAVIGATION & THEME TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
        mainNav.innerHTML = `
            <div class="logo"><a href="#home">Sadia Khalil</a></div>
            <button class="menu-toggle" aria-label="Toggle navigation">
                &#9776; <!-- Hamburger icon -->
            </button>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><button id="theme-toggle">Toggle Theme</button></li>
            </ul>
        `;

        const menuToggle = mainNav.querySelector('.menu-toggle');
        const navLinks = mainNav.querySelector('ul');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked (for mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Theme Toggle (Bonus Feature - Initial Setup)
        const themeToggleBtn = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }

        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light-theme');
            } else {
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            }
        });

        // Skill Bar Animation Observer
        const skillsSection = document.getElementById('skills');
        const skillProgressBars = document.querySelectorAll('.skill-progress');

        if (skillsSection && skillProgressBars.length > 0) {
            const observerOptions = {
                threshold: 0.2
            };

            const skillsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillProgressBars.forEach(bar => {
                            const targetWidth = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                            bar.style.width = targetWidth;
                        });
                        skillsObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            skillsObserver.observe(skillsSection);
        }
    }
});
