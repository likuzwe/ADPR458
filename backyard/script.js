window.addEventListener('resize', function() {
    adjustStyles();
});

// Initial call to adjust styles when the page loads
adjustStyles();

function adjustStyles() {
    const screenWidth = window.innerWidth;
    const navbar = document.getElementById('navbar');

    if (screenWidth < 600) {
        navbar.style.flexDirection = 'column';

        const navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach(link => {
            link.style.display = 'block';
            link.style.margin = '10px 0';
            link.style.textAlign = 'center';
        });
    } else {
        navbar.style.flexDirection = 'row';

        const navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach(link => {
            link.style.display = 'inline-block';
            link.style.margin = '0 20px';
            link.style.textAlign = 'center';
        });
    }

    if (screenWidth < 600) {
        navbar.classList.add('responsive');
    } else {
        navbar.classList.remove('responsive');
    }
}
window.addEventListener('resize', function() {
    adjustStyles();
});


