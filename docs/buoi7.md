---
id: buoi7
title: "Buổi 7: Database Cơ bản"
description:  Database cơ bản và kết nối
---

# **Buổi 7: Database cơ bản và kết nối**
## **Mục tiêu:**
  - Hiểu SQL/NoSQL và kết nối DB.
## **Nội dung:**
  1. Giới thiệu: SQL (MySQL) vs NoSQL (MongoDB). Chọn SQLite cho đơn giản (`npm install sqlite3`).
  2. Tạo DB và bảng notes:
     ```javascript
     const sqlite3 = require('sqlite3').verbose();
     const db = new sqlite3.Database(':memory:');

     db.serialize(() => {
       db.run('CREATE TABLE notes (id INTEGER PRIMARY KEY, content TEXT)');
       db.run('INSERT INTO notes (content) VALUES (?)', ['My first note']);
     });
     ```
  3. Cập nhật route `/notes`:
     ```javascript
     app.get('/notes', (req, res) => {
       if (req.session.user) {
         db.all('SELECT * FROM notes', (err, rows) => {
           res.render('notes', { notes: rows });
         });
       } else {
         res.redirect('/login');
       }
     });
     ```
## **Bài tập:**

Thêm form để thêm ghi chú mới vào DB.