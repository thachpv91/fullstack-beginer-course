---
id: buoi6
title: "Buổi 6: Templating với EJS"
description: Templating với EJS
---

# **Buổi 6: Templating với EJS**

## **Mục tiêu:**
  - Sử dụng templating engine thay vì HTML cứng.
## **Nội dung:**
  1. Cài EJS (`npm install ejs`) và cấu hình:
     ```javascript
     app.set('view engine', 'ejs');
     ```
  2. Tạo thư mục `views` và file `login.ejs`:
     ```html
     <form method="POST" action="/login">
       <input type="text" name="username" placeholder="Username" />
       <input type="password" name="password" placeholder="Password" />
       <button type="submit">Login</button>
     </form>
     ```
  3. Cập nhật route `/login`:
     ```javascript
     app.get('/login', (req, res) => {
       res.render('login');
     });
     ```
## **Bài tập:**

Tạo file `notes.ejs` để hiển thị danh sách ghi chú giả lập.