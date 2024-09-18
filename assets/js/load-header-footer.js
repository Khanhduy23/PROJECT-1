document.addEventListener('DOMContentLoaded', function () {
    // Load header
    fetch('header.html') // Tải trực tiếp từ thư mục hiện tại
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    // Load footer
    fetch('footer.html') // Tải trực tiếp từ thư mục hiện tại
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});
