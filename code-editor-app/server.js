const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware để phân tích nội dung của yêu cầu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cung cấp tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'project-html')));

// Định tuyến cho trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project-html', 'code-editor.html'));
});

// Xử lý yêu cầu POST tại /save-code
app.post('/save-code', (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send('Mã không được để trống');
    }

    // Lưu mã vào file code.html trong thư mục public
    fs.writeFile(path.join(__dirname, 'public', 'code.html'), code, (err) => {
        if (err) {
            console.error('Lỗi khi lưu mã:', err);
            return res.status(500).send('Lỗi khi lưu mã');
        }
        res.send('Mã đã được lưu thành công');
    });
});

// Khởi chạy máy chủ
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
