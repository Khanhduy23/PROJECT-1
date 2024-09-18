document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = window.location.pathname.includes('/project-html/') ? '../' : '';

    // Load header
    fetch(`${baseUrl}header.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Cập nhật các liên kết trong header
            const links = document.querySelectorAll('header a');
            links.forEach(link => {
                link.href = baseUrl + link.getAttribute('href');
            });

            // Sau khi header đã được tải, gắn các sự kiện cho menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');

            if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                });
            }
        });

    // Load footer
    fetch(`${baseUrl}footer.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});
