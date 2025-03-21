---
id: buoi2
title: "Buổi 2: HTML, CSS, JS Cơ bản"
description: HTML, CSS, JS cơ bản và phục vụ file tĩnh
---

# Buổi 2: HTML, CSS, JS cơ bản và phục vụ file tĩnh

## Mục tiêu:
  - Hiểu vai trò HTML, CSS, JS trong frontend.
  - Phục vụ file HTML tĩnh bằng Node.js.
## Nội dung:
  1. Tạo thư mục `public` và file `index.html`:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
       <title>My First Web</title>
       <style>
         body { font-family: Arial; text-align: center; margin-top: 50px; }
         h1 { color: blue; }
       </style>
     </head>
     <body>
       <h1>Hello from HTML!</h1>
       <script>
         alert('Hello from JavaScript!');
       </script>
     </body>
     </html>
     ```
  2. Cập nhật `server.js` để phục vụ file tĩnh:
     ```javascript
     const http = require('http');
     const fs = require('fs');

     const server = http.createServer((req, res) => {
       fs.readFile('./public/index.html', (err, data) => {
         if (err) {
           res.writeHead(500);
           res.end('Error loading file');
         } else {
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.end(data);
         }
       });
     });
     server.listen(3000);
     ```
  3. Giải thích: HTML (cấu trúc), CSS (trình bày), JS (tương tác).
  4. Giới thiệu domain, hosting, DNS cơ bản (localhost là gì).
## Bài tập

Thêm một button vào HTML, khi click thì đổi màu chữ của `<h1>`.
