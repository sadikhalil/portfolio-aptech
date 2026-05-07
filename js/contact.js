document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatusMessage = document.getElementById('form-status-message');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    // Helper to get stored data
    const getSavedContacts = () => {
        try {
            const saved = localStorage.getItem('contactSubmissions');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            return [];
        }
    };

    const setMessage = (element, message) => {
        if (!element) return;
        element.textContent = message;
        message ? element.classList.add('show') : element.classList.remove('show');
    };

    // Validation
    const validateName = () => {
        const val = nameInput.value.trim();
        setMessage(nameError, val ? '' : 'Name is required.');
        return !!val;
    };

    const validateEmail = () => {
        const val = emailInput.value.trim();
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!val) {
            setMessage(emailError, 'Email is required.');
            return false;
        }
        if (!gmailRegex.test(val)) {
            setMessage(emailError, 'Please enter a valid @gmail.com address.');
            return false;
        }
        setMessage(emailError, '');
        return true;
    };

    const validateSubject = () => {
        const val = subjectInput.value.trim();
        setMessage(subjectError, val ? '' : 'Subject is required.');
        return !!val;
    };

    const validateMessage = () => {
        const val = messageInput.value.trim();
        setMessage(messageError, val ? '' : 'Message is required.');
        return !!val;
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
                
                // 1. Visual Feedback: Start "Sending" state
                contactForm.style.opacity = '0.5';
                contactForm.style.pointerEvents = 'none'; // Disable clicking
                formStatusMessage.textContent = 'Sending your message...';
                formStatusMessage.className = 'form-status show'; 
                formStatusMessage.style.color = '#007bff';

                setTimeout(() => {
                    const formData = {
                        name: nameInput.value.trim(),
                        email: emailInput.value.trim(),
                        subject: subjectInput.value.trim(),
                        message: messageInput.value.trim(),
                        timestamp: new Date().toISOString()
                    };

                    // 2. Save Data
                    const submissions = getSavedContacts();
                    submissions.push(formData);
                    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

                    // 3. THE THANK YOU MESSAGE
                    // We clear the form and show the success message
                    contactForm.reset();
                    contactForm.style.opacity = '1';
                    contactForm.style.pointerEvents = 'all';

                    formStatusMessage.innerHTML = `
                        <div style="text-align: center; padding: 10px;">
                            <strong>Thank You, ${formData.name}!</strong><br>
                            Your message has been sent successfully. I'll get back to you soon.
                        </div>
                    `;
                    formStatusMessage.style.color = '#28a745'; // Success Green
                    formStatusMessage.classList.add('success');

                    // 4. Cleanup error highlights
                    [nameError, emailError, subjectError, messageError].forEach(el => setMessage(el, ''));

                    // Optional: Hide the thank you message after 7 seconds
                    setTimeout(() => {
                        formStatusMessage.classList.remove('show');
                    }, 7000);

                }, 1500);
            }
        });
    }
});