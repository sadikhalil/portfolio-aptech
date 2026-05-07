// js/projects.js
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const projectSearchInput = document.getElementById('project-search');
    const categoryFiltersContainer = document.getElementById('category-filters');
    let allProjects = [];
    let uniqueCategories = new Set();

    // Function to show/hide loading spinner
    const toggleLoading = (show) => {
        if (loadingSpinner) {
            loadingSpinner.classList.toggle('show', show);
        }
    };

    // Function to create a project card
    const createProjectCard = (project) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'reveal');
        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.name}" class="project-image">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <p class="project-category">Category: ${project.category}</p>
            </div>
        `;
        return projectCard;
    };

    // Function to render projects with smooth filtering animation
    const renderProjects = (projectsToRender) => {
        if (projectsContainer) {
            // Add filtering class (trigger fade out)
            projectsContainer.classList.remove('filtering-complete');
            projectsContainer.classList.add('filtering');
            
            // Wait for fade out animation (0.4s)
            setTimeout(() => {
                projectsContainer.innerHTML = '';
                if (projectsToRender.length === 0) {
                    projectsContainer.innerHTML = '<p>No projects found.</p>';
                } else {
                    projectsToRender.forEach((project) => {
                        const card = createProjectCard(project);
                        projectsContainer.appendChild(card);
                        // Trigger Intersection Observer
                        setTimeout(() => {
                            if (window.revealObserver) {
                                window.revealObserver.observe(card);
                            }
                        }, 0);
                    });
                }
                
                // Trigger fade in
                requestAnimationFrame(() => {
                    projectsContainer.classList.remove('filtering');
                    projectsContainer.classList.add('filtering-complete');
                });
            }, 400);
        }
    };

    // Function to render category filters
    const renderCategoryFilters = () => {
        if (categoryFiltersContainer) {
            categoryFiltersContainer.innerHTML = '<button class="category-button active" data-category="all">All</button>';
            uniqueCategories.forEach(category => {
                const button = document.createElement('button');
                button.classList.add('category-button');
                button.dataset.category = category;
                button.textContent = category;
                categoryFiltersContainer.appendChild(button);
            });
        }
    };

    // Filter projects based on search term and category
    const filterProjects = () => {
        const searchTerm = projectSearchInput ? projectSearchInput.value.trim().toLowerCase() : '';
        const activeCategoryButton = categoryFiltersContainer ? categoryFiltersContainer.querySelector('.category-button.active') : null;
        const selectedCategory = activeCategoryButton ? activeCategoryButton.dataset.category : 'all';

        console.log('Filtering with:', { searchTerm, selectedCategory }); // Debugging

        const filtered = allProjects.filter(project => {
            const matchesSearch = project.name.toLowerCase().includes(searchTerm) || 
                                  project.techStack.some(tech => tech.toLowerCase().includes(searchTerm)) ||
                                  project.description.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        
        renderProjects(filtered);
    };

    // Event Listeners for search and category filters
    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', filterProjects);
    }

    if (categoryFiltersContainer) {
        categoryFiltersContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('category-button')) {
                // Remove active class from previous button
                categoryFiltersContainer.querySelectorAll('.category-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                // Add active class to clicked button
                event.target.classList.add('active');
                filterProjects();
            }
        });
    }

    // Fetch projects from JSON
    const fetchProjects = async () => {
        toggleLoading(true);
        try {
            const response = await fetch('./data/projects.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            allProjects = data;

            // Extract unique categories
            allProjects.forEach(project => uniqueCategories.add(project.category));
            renderCategoryFilters();
            renderProjects(allProjects);
        } catch (error) {
            console.error('Error fetching projects:', error);
            if (projectsContainer) {
                projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
            }
        } finally {
            toggleLoading(false);
        }
    };

    fetchProjects();
});
