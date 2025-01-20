
    document.addEventListener('DOMContentLoaded', () => {
        const scrollTopBtn = document.getElementById('scroll-top');

        // Show/hide button on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll to top
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

