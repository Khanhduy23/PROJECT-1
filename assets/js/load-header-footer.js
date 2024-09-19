document.addEventListener('DOMContentLoaded', function() {
    let baseUrl = '';

    // Xác định baseUrl dựa trên đường dẫn hiện tại
    if (window.location.pathname.includes('/project-css/') ||
        window.location.pathname.includes('/project-html/')) {
        baseUrl = '../';
    }

    // Tải header
    fetch(`${baseUrl}header.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Cập nhật các liên kết trong header
            const links = document.querySelectorAll('header a');
            links.forEach(link => {
                link.href = baseUrl + link.getAttribute('href');
            });

            // Gán sự kiện cho menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');

            if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Tải footer
    fetch(`${baseUrl}footer.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
