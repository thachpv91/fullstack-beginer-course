---
id: buoi5
title: "Buổi 5: Session, Cookie & Login"
description: Session, Cookie và Login cơ bản
---

# **Buổi 5: Session, Cookie và Login cơ bản**

## **Mục tiêu:**
  - Hiểu session, cookie và xử lý form.
## **Nội dung:**
  1. Cài thêm `express-session` (`npm install express-session`).
  2. Cập nhật `server.js`:
     ```javascript
     const express = require('express');
     const session = require('express-session');
     const app = express();

     app.use(express.static('public'));
     app.use(express.urlencoded({ extended: true }));
     app.use(session({
       secret: 'mysecret',
       resave: false,
       saveUninitialized: true
     }));

     app.get('/login', (req, res) => {
       res.send(`
         <form method="POST" action="/login">
           <input type="text" name="username" placeholder="Username" />
           <input type="password" name="password" placeholder="Password" />
           <button type="submit">Login</button>
         </form>
       `);
     });

     app.post('/login', (req, res) => {
       const { username, password } = req.body;
       if (username === 'admin' && password === '123') {
         req.session.user = username;
         res.send('Login successful! <a href="/notes">Go to Notes</a>');
       } else {
         res.send('Login failed');
       }
     });

     app.get('/notes', (req, res) => {
       if (req.session.user) {
         res.send(`Welcome ${req.session.user} to Notes App`);
       } else {
         res.send('Please login first <a href="/login">Login</a>');
       }
     });

     app.listen(3000);
     ```
  3. Giải thích: Session lưu trạng thái, cookie là gì, form data.
## **Bài tập:**

Thêm nút logout để xóa session.
