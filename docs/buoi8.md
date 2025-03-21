---
id: buoi8
title: "Buổi 8: Hoàn thiện Notes App"
description: Hoàn thiện Notes App
---

# **Buổi 8: Hoàn thiện Notes App**

## **Mục tiêu:**
  - Hoàn thiện ứng dụng và hướng dẫn tự học.
## **Nội dung:**
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
## **Bài tập:**

Tự tìm hiểu cách xóa ghi chú.