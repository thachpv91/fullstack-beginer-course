---
id: buoi1
title: "Buổi 1: Hello World với Node.js"
description: Giới thiệu tổng quan và "Hello World" với Node.js
---

# Buổi 1: Giới thiệu tổng quan và "Hello World" với Node.js

## Mục tiêu:
  - Hiểu cơ bản một trang web hoạt động thế nào (client-server).
  - Cài đặt môi trường và chạy được web đầu tiên.
## Nội dung:
  1. Giới thiệu: Web là gì? Client gửi request, server trả response qua HTTP.
  2. Cài đặt Node.js và chạy lệnh `node -v` để kiểm tra.
  3. Tạo file `server.js` với nội dung cơ bản:
     ```javascript
     const http = require('http');
     const server = http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Hello World!');
     });
     server.listen(3000, () => {
       console.log('Server running at http://localhost:3000');
     });
     ```
  4. Chạy file: `node server.js` và truy cập `localhost:3000` trên trình duyệt.
  5. Giải thích ngắn: HTTP (request/response), port, frontend (HTML/CSS/JS) và backend (Node.js).
  6. Giới thiệu sơ đồ tổng quan (vẽ tay hoặc dùng công cụ như draw.io):
     - Frontend: HTML, CSS, JS.
     - Backend: Node.js, Express, Router, Middleware.
     - Database: SQL/NoSQL.

## Bài tập:

Thử thay đổi text "Hello World!" thành tên của các bạn.
