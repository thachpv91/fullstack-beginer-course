---
id: buoi3
title: "Buổi 3: Router & Express.js"
description: Xử lý Router thủ công và giới thiệu Express.js
---

# Buổi 3: Router thủ công và giới thiệu Express.js
## Mục tiêu
  - Hiểu khái niệm router.
  - Chuyển sang dùng Express.js.
## Nội dung

  1. Tạo router thủ công trong `server.js`:
     ```javascript
     const http = require('http');
     const fs = require('fs');

     const server = http.createServer((req, res) => {
       if (req.url === '/') {
         fs.readFile('./public/index.html', (err, data) => {
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.end(data);
         });
       } else if (req.url === '/about') {
         res.writeHead(200, { 'Content-Type': 'text/plain' });
         res.end('About Page');
       } else {
         res.writeHead(404);
         res.end('Page not found');
       }
     });
     server.listen(3000);
     ```
  2. Cài Express (`npm init -y`, `npm install express`) và thay bằng Express:
     ```javascript
     const express = require('express');
     const app = express();

     app.get('/', (req, res) => {
       res.sendFile(__dirname + '/public/index.html');
     });

     app.get('/about', (req, res) => {
       res.send('About Page');
     });

     app.listen(3000, () => {
       console.log('Server running at http://localhost:3000');
     });
     ```
  3. Giải thích: Express đơn giản hóa router và xử lý request.

## Bài tập

Thêm route `/contact` trả về một trang HTML tĩnh đơn giản.