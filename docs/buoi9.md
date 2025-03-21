---
id: buoi9
title: "Buổi 9: Final Project"
description: Final Project - Xây dựng Notes App hoàn chỉnh
---

# Buổi 9: Final Project - Xây dựng Notes App hoàn chỉnh

## Mục tiêu
- Áp dụng toàn bộ kiến thức từ các buổi trước để xây dựng một ứng dụng web hoàn chỉnh.
- Tạo một Notes App tương tự Google Keep với các chức năng cơ bản (thêm, xem, xóa ghi chú).
- Làm quen với quy trình phát triển dự án và triển khai code lên GitHub.

## Nội dung

### 1. Tổng quan dự án
- **Mô tả**: Xây dựng một ứng dụng web cho phép người dùng đăng nhập, thêm ghi chú, xem danh sách ghi chú, và xóa ghi chú nếu cần.
- **Yêu cầu**:
  - Frontend: HTML, CSS (giao diện đơn giản), JavaScript (tương tác).
  - Backend: Node.js, Express (xử lý router, session).
  - Database: SQLite (lưu ghi chú).
  - Git: Quản lý code và push lên GitHub.

### 2. Kết quả mong đợi
- Người dùng đăng nhập với `admin/123`.
- Thêm ghi chú mới qua form.
- Xem danh sách ghi chú.
- Xóa ghi chú bằng nút "Delete".
- Đăng xuất và quay lại trang login.

### 3. Các bước thực hiện
1. **Setup dự án**:
   - Tạo thư mục dự án mới: `notes-app`.
   - Khởi tạo Git: `git init`.
   - Cài đặt các thư viện: `npm init -y`, `npm install express express-session ejs sqlite3`.

2. **Cấu trúc dự án**:
   ```
   notes-app/
   ├── public/           # File tĩnh (CSS, JS)
   │   └── style.css
   ├── views/            # Template EJS
   │   ├── login.ejs
   │   └── notes.ejs
   ├── server.js         # File backend chính
   └── database.js       # File cấu hình database
   ```

3. **Code backend (`server.js`)**:
   ```javascript
   const express = require('express');
   const session = require('express-session');
   const sqlite3 = require('sqlite3').verbose();
   const app = express();

   // Cấu hình
   app.use(express.static('public'));
   app.use(express.urlencoded({ extended: true }));
   app.use(session({
     secret: 'mysecret',
     resave: false,
     saveUninitialized: true
   }));
   app.set('view engine', 'ejs');

   // Kết nối database
   const db = new sqlite3.Database(':memory:');
   db.serialize(() => {
     db.run('CREATE TABLE notes (id INTEGER PRIMARY KEY, content TEXT)');
   });

   // Middleware kiểm tra đăng nhập
   const isAuthenticated = (req, res, next) => {
     if (req.session.user) next();
     else res.redirect('/login');
   };

   // Routes
   app.get('/login', (req, res) => {
     res.render('login');
   });

   app.post('/login', (req, res) => {
     const { username, password } = req.body;
     if (username === 'admin' && password === '123') {
       req.session.user = username;
       res.redirect('/notes');
     } else {
       res.send('Login failed');
     }
   });

   app.get('/logout', (req, res) => {
     req.session.destroy(() => {
       res.redirect('/login');
     });
   });

   app.get('/notes', isAuthenticated, (req, res) => {
     db.all('SELECT * FROM notes', (err, rows) => {
       res.render('notes', { notes: rows, user: req.session.user });
     });
   });

   app.post('/notes', isAuthenticated, (req, res) => {
     const { content } = req.body;
     db.run('INSERT INTO notes (content) VALUES (?)', [content], () => {
       res.redirect('/notes');
     });
   });

   app.post('/notes/delete', isAuthenticated, (req, res) => {
     const { id } = req.body;
     db.run('DELETE FROM notes WHERE id = ?', [id], () => {
       res.redirect('/notes');
     });
   });

   app.listen(3000, () => {
     console.log('Notes App running at http://localhost:3000');
   });
   ```

4. **Frontend - Template EJS (`views/login.ejs`)**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Login</title>
     <link rel="stylesheet" href="/style.css">
   </head>
   <body>
     <h1>Login to Notes App</h1>
     <form method="POST" action="/login">
       <input type="text" name="username" placeholder="Username" required>
       <input type="password" name="password" placeholder="Password" required>
       <button type="submit">Login</button>
     </form>
   </body>
   </html>
   ```

5. **Frontend - Template EJS (`views/notes.ejs`)**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Notes App</title>
     <link rel="stylesheet" href="/style.css">
   </head>
   <body>
     <h1>Welcome, <%= user %>!</h1>
     <a href="/logout">Logout</a>
     <h2>Your Notes</h2>
     <form method="POST" action="/notes">
       <input type="text" name="content" placeholder="Add a note" required>
       <button type="submit">Add</button>
     </form>
     <ul>
       <% notes.forEach(note => { %>
         <li>
           <%= note.content %>
           <form method="POST" action="/notes/delete" style="display:inline;">
             <input type="hidden" name="id" value="<%= note.id %>">
             <button type="submit">Delete</button>
           </form>
         </li>
       <% }); %>
     </ul>
   </body>
   </html>
   ```

6. **CSS (`public/style.css`)**:
   ```css
   body {
     font-family: Arial, sans-serif;
     max-width: 600px;
     margin: 0 auto;
     padding: 20px;
   }
   h1, h2 { color: #333; }
   input, button { margin: 5px; padding: 5px; }
   ul { list-style: none; padding: 0; }
   li { margin: 10px 0; border-bottom: 1px solid #ddd; }
   ```

7. **Push code lên GitHub**:
   - Sau khi hoàn thiện, commit và push:
     ```
     git add .
     git commit -m "Hoàn thành Notes App project"
     git push -u origin main
     ```

## Bài tập
- **Cải tiến giao diện**: Thêm màu sắc cho ghi chú (dùng CSS hoặc input color).
- **Tự tìm hiểu**: Thêm chức năng chỉnh sửa ghi chú (gợi ý: tạo route `/notes/edit`).
- **Triển khai**: Push toàn bộ code lên GitHub và chia sẻ link repository.

## Lưu ý

- Chia thời gian: 1 giờ hướng dẫn + 2-3 giờ để các bạn tự code.
- Khuyến khích các bạn debug lỗi và hỏi nếu cần.
