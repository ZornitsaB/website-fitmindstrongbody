// Mobile Navigation Toggle - COMPLETE REWRITE
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        console.log('Mobile menu elements found');
        
        const openMenu = () => {
            console.log('Opening menu');
            hamburger.classList.add('active');
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        };
        
        const closeMenu = () => {
            console.log('Closing menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        };
        
        const toggleMenu = () => {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        };
        
        // Simple click handler only
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked');
            toggleMenu();
        });
        
        // Close menu when clicking on navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                console.log('Nav link clicked, closing menu');
                closeMenu();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !hamburger.contains(e.target) && 
                !navMenu.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Ensure hamburger is clickable
        hamburger.style.pointerEvents = 'auto';
        hamburger.style.cursor = 'pointer';
        
        console.log('Mobile menu initialized successfully');
    } else {
        console.log('Mobile menu elements NOT found:', hamburger, navMenu);
    }
});

// Hero Video Autoplay Fix
document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        // Force video to play
        heroVideo.muted = true;
        heroVideo.playsInline = true;
        
        // Try to play the video
        const playPromise = heroVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video is playing');
            }).catch(error => {
                console.log('Video autoplay failed, trying again:', error);
                // Try again after a short delay
                setTimeout(() => {
                    heroVideo.play().catch(e => console.log('Second attempt failed:', e));
                }, 100);
            });
        }
        
        // Ensure video loops
        heroVideo.loop = true;
    }
});

// Hero section button functionality
document.addEventListener('DOMContentLoaded', () => {
    const startJourneyBtn = document.querySelector('.hero-buttons .btn-primary');
    const successStoriesBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', () => {
            // Scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    if (successStoriesBtn) {
        successStoriesBtn.addEventListener('click', () => {
            // Scroll to community section (testimonials)
            const communitySection = document.querySelector('#community');
            if (communitySection) {
                communitySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});


// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Workout Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const workoutCards = document.querySelectorAll('.workout-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        workoutCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if it's open (this is handled by the main menu code above)
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Email sending function - works immediately without EmailJS setup
function sendEmail() {
    // Get all form fields
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const heard = document.getElementById('contact-heard').value;
    const otherDetails = document.getElementById('contact-other-details').value;
    const goals = document.getElementById('contact-goals').value;
    const problems = document.getElementById('contact-problems').value;
    const challenge = document.getElementById('contact-challenge').value;
    const timing = document.getElementById('contact-timing').value;
    const story = document.getElementById('contact-story').value;
    
    // Validation
    if (!name || !email || !phone || !heard || !goals || !problems || !challenge || !timing || !story) {
        alert('Моля, попълнете всички полета / Please fill in all fields');
        return;
    }
    
    // If "Other" is selected, validate the details field
    if (heard === 'Other' && !otherDetails) {
        alert('Моля, опишете от къде научихте за мен / Please describe where you heard about me');
        return;
    }
    
    // Show loading state
    const submitButton = document.querySelector('.contact-form .btn-primary');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Изпращане... / Sending...';
    submitButton.disabled = true;
    
    // Prepare email content
    let heardText = heard;
    if (heard === 'Other' && otherDetails) {
        heardText = `Other: ${otherDetails}`;
    }
    
    const emailContent = `
Име / Name: ${name}
Email: ${email}
Телефон / Phone: ${phone}
От къде научи за мен / Where did you hear about me: ${heardText}

Цели / Goals:
${goals}

Проблеми / Problems:
${problems}

Предизвикателства / Challenges:
${challenge}

Защо сега / Why now:
${timing}

История / Story:
${story}
    `;
    
    // Create mailto link with all form data
    const subject = 'Ново съобщение от уебсайта / New message from website';
    const body = emailContent;
    const mailtoLink = `mailto:zornica.s.boyanova@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
        alert('Съобщението е готово за изпращане! / Message is ready to send!');
        // Reset form
        document.querySelector('.contact-form').reset();
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1000);
}

// Show/hide "Other" text field when dropdown changes
document.addEventListener('DOMContentLoaded', () => {
    const heardDropdown = document.getElementById('contact-heard');
    const otherTextField = document.getElementById('contact-other-text');
    const otherTextArea = document.getElementById('contact-other-details');
    
    if (heardDropdown && otherTextField && otherTextArea) {
        heardDropdown.addEventListener('change', function() {
            if (this.value === 'Other') {
                otherTextField.style.display = 'block';
                otherTextArea.setAttribute('required', 'required');
            } else {
                otherTextField.style.display = 'none';
                otherTextArea.removeAttribute('required');
                otherTextArea.value = ''; // Clear the value when hidden
            }
        });
    }
});

// Form submission handling (for backward compatibility)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        sendEmail();
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.program-card, .workout-card, .testimonial, .stat-card, .feature');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Animate stats when they come into view
const statNumbers = document.querySelectorAll('.stat-number, .stat-card h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/[^\d]/g, ''));
            if (number) {
                animateCounter(entry.target, number);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Button click effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Program card hover effects
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Workout card click handlers
document.querySelectorAll('.workout-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h4').textContent;
        alert(`Starting workout: ${title}`);
    });
});

// Newsletter signup (if added later)
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }
}

// Initialize newsletter if exists
document.addEventListener('DOMContentLoaded', setupNewsletter);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Any additional scroll-based functionality can go here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation for images (excluding profile image and language flags)
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img:not(.profile-image):not(.language-switcher img)');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in';
    });
    
    // Ensure profile image is always visible
    const profileImages = document.querySelectorAll('.profile-image');
    profileImages.forEach(img => {
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        img.style.display = 'block';
    });
    
    // Ensure language switcher flags are always visible
    const languageFlags = document.querySelectorAll('.language-switcher .flag');
    languageFlags.forEach(flag => {
        flag.style.opacity = '1';
        flag.style.visibility = 'visible';
        flag.style.display = 'inline';
    });
    
    // Ensure language switcher buttons are always visible
    const languageButtons = document.querySelectorAll('.language-switcher .lang-btn');
    languageButtons.forEach(btn => {
        btn.style.opacity = '1';
        btn.style.visibility = 'visible';
        btn.style.display = 'flex';
    });
    
    // Ensure language switcher container is always visible
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.style.opacity = '1';
        languageSwitcher.style.visibility = 'visible';
        languageSwitcher.style.display = 'flex';
    }
    
    // Continuously ensure language switcher stays visible
    setInterval(() => {
        const flags = document.querySelectorAll('.language-switcher .flag');
        flags.forEach(flag => {
            if (flag.style.opacity !== '1') {
                flag.style.opacity = '1';
                flag.style.visibility = 'visible';
                flag.style.display = 'inline';
            }
        });
        
        const buttons = document.querySelectorAll('.language-switcher .lang-btn');
        buttons.forEach(btn => {
            if (btn.style.opacity !== '1') {
                btn.style.opacity = '1';
                btn.style.visibility = 'visible';
                btn.style.display = 'flex';
            }
        });
    }, 1000); // Check every second
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563eb';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Article toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle all article links
    const articleLinks = document.querySelectorAll('a[href^="#"]');
    
    articleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if this is an article link
            if (href.includes('article')) {
                e.preventDefault();
                
                const articleSection = document.querySelector(href);
                
                if (articleSection) {
                    // Show the article section
                    articleSection.style.display = 'block';
                    
                    // Smooth scroll to the article
                    articleSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Add a subtle animation
                    setTimeout(() => {
                        articleSection.style.opacity = '0';
                        articleSection.style.transform = 'translateY(20px)';
                        articleSection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                        
                        setTimeout(() => {
                            articleSection.style.opacity = '1';
                            articleSection.style.transform = 'translateY(0)';
                        }, 50);
                    }, 100);
                }
            }
        });
    });
});

console.log('FitFuel Pro website loaded successfully! 🏋️‍♂️'); 