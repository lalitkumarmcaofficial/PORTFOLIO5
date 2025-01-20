
    // Select the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');

    // Add a click event listener to toggle dark mode
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Change button text based on theme
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light Mode';
        } else {
            themeToggle.textContent = 'Dark Mode';
        }
    });
