---
id: buoi4
title: "Buổi 4: Middleware & Static Files"
description: Middleware và Static Files
---

# **Buổi 4: Middleware và Static Files**

## **Mục tiêu:**
  - Hiểu middleware và phục vụ static files.
## **Nội dung:**
  1. Phục vụ static files với Express:
     ```javascript
     const express = require('express');
     const app = express();

     app.use(express.static('public'));

     app.get('/about', (req, res) => {
       res.send('About Page');
     });

     app.listen(3000);
     ```
  2. Tạo middleware đơn giản:
     ```javascript
     app.use((req, res, next) => {
       console.log(`Request URL: ${req.url}`);
       next();
     });
     ```
  3. Giải thích: Middleware là gì? (Chạy giữa request và response).

## **Bài tập:** 

Viết middleware kiểm tra thời gian request, nếu sau 5h chiều thì trả về "Server closed".

---