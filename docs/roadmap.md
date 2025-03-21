### **Lộ trình đào tạo (8 buổi)**

#### **Buổi 1: Giới thiệu tổng quan và "Hello World" với Node.js**
- **Mục tiêu:**
  - Hiểu cơ bản một trang web hoạt động thế nào (client-server).
  - Cài đặt môi trường và chạy được web đầu tiên.
- **Nội dung:**
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
- **Bài tập:** Thử thay đổi text "Hello World!" thành tên của các bạn.

---

#### **Buổi 2: HTML, CSS, JS cơ bản và phục vụ file tĩnh**
- **Mục tiêu:**
  - Hiểu vai trò HTML, CSS, JS trong frontend.
  - Phục vụ file HTML tĩnh bằng Node.js.
- **Nội dung:**
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
- **Bài tập:** Thêm một button vào HTML, khi click thì đổi màu chữ của `<h1>`.

---

#### **Buổi 3: Router thủ công và giới thiệu Express.js**
- **Mục tiêu:**
  - Hiểu khái niệm router.
  - Chuyển sang dùng Express.js.
- **Nội dung:**
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
- **Bài tập:** Thêm route `/contact` trả về một trang HTML tĩnh đơn giản.

---

#### **Buổi 4: Middleware và Static Files**
- **Mục tiêu:**
  - Hiểu middleware và phục vụ static files.
- **Nội dung:**
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
- **Bài tập:** Viết middleware kiểm tra thời gian request, nếu sau 5h chiều thì trả về "Server closed".

---

#### **Buổi 5: Session, Cookie và Login cơ bản**
- **Mục tiêu:**
  - Hiểu session, cookie và xử lý form.
- **Nội dung:**
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
- **Bài tập:** Thêm nút logout để xóa session.

---

#### **Buổi 6: Templating với EJS**
- **Mục tiêu:**
  - Sử dụng templating engine thay vì HTML cứng.
- **Nội dung:**
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
- **Bài tập:** Tạo file `notes.ejs` để hiển thị danh sách ghi chú giả lập.

---

#### **Buổi 7: Database cơ bản và kết nối**
- **Mục tiêu:**
  - Hiểu SQL/NoSQL và kết nối DB.
- **Nội dung:**
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
- **Bài tập:** Thêm form để thêm ghi chú mới vào DB.

---

#### **Buổi 8: Hoàn thiện Notes App**
- **Mục tiêu:**
  - Hoàn thiện ứng dụng và hướng dẫn tự học.
- **Nội dung:**
  1. Thêm route POST để lưu ghi chú:
     ```javascript
     app.post('/notes', (req, res) => {
       const { content } = req.body;
       db.run('INSERT INTO notes (content) VALUES (?)', [content], () => {
         res.redirect('/notes');
       });
     });
     ```
  2. Cập nhật `notes.ejs` để hiển thị form và danh sách ghi chú.
  3. Đưa ra keyword: REST API, Authentication, Deployment, Git.
- **Bài tập:** Tự tìm hiểu cách xóa ghi chú.

---

### **Sơ đồ tổng quan (vẽ bằng text)**
```
Website
├── Frontend
│   ├── HTML (Cấu trúc)
│   ├── CSS (Trình bày)
│   └── JavaScript (Tương tác)
├── Backend
│   ├── Node.js (Runtime)
│   ├── Express.js (Framework)
│   ├── Router (Xử lý URL)
│   ├── Middleware (Xử lý trung gian)
│   └── Session/Cookie (Quản lý trạng thái)
└── Database
    ├── SQL (MySQL, SQLite)
    └── NoSQL (MongoDB)
```

---

### **Lời khuyên cho trainer**
- Mỗi buổi nên có 30-40 phút lý thuyết, còn lại là thực hành.
- Khuyến khích các bạn đặt câu hỏi và tự debug code.
- Sau khóa học, hướng dẫn các bạn đọc tài liệu Express.js và MDN Web Docs.
