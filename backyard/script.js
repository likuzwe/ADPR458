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
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelectorAll('.navbar a:not(.menu-icon)');

    if (navbar.classList.contains('responsive')) {
        navbar.classList.remove('responsive');
        menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
        navLinks.forEach(link => {
            link.style.display = 'inline-block';
        });
    } else {
        navbar.classList.add('responsive');
        menuIcon.innerHTML = '<i class="fa fa-times"></i>';
        navLinks.forEach(link => {
            link.style.display = 'block';
        });
    }
}
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var header = document.querySelector('.full-page-header');

    if (window.scrollY > header.clientHeight) {
        navbar.style.backgroundColor = 'transparent';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});

