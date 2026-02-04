/* --------------------------------------------------
   MAIN.JS - Novarance Pharmaceuticals
-------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Sticky Header Shadow ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
            } else {
                header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
            }
        });
    }

    // --- Data Filtering (Products) ---
    // Only runs if on products page
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');

                productCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        // Trigger animation
                        card.classList.remove('zoom-in');
                        void card.offsetWidth; // Trigger reflow
                        card.classList.add('zoom-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // --- Form Validation (Contact & Careers) ---
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert('Thank you! Your details have been submitted successfully.');
                form.reset();
                btn.innerText = originalText;
                btn.style.opacity = '1';
            }, 1000);
        });
    });

    // --- Stats Counter Animation ---
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetValue = parseInt(target.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds animation
                    const startValue = 0;
                    const startTime = performance.now();

                    function updateCount(currentTime) {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);

                        // Ease-out function for smooth effect
                        const easeOutQuad = progress * (2 - progress);

                        const currentValue = Math.floor(easeOutQuad * (targetValue - startValue) + startValue);
                        target.innerText = currentValue;

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            target.innerText = targetValue; // Ensure final exact value
                        }
                    }

                    requestAnimationFrame(updateCount);
                    observer.unobserve(target);
                }
            });
        }, {
            threshold: 0.5
        });

        statNumbers.forEach(stat => statsObserver.observe(stat));
    }

});
