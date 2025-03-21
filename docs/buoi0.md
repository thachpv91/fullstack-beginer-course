---
id: buoi0
title: "Buổi 0: Welcome - Hướng dẫn cách học và Git"
description: Cài đặt môi trường, làm quen với Git và định hướng học tập.
---

# Buổi 0: Welcome - Hướng dẫn cách học và làm quen với Git

## Mục tiêu
- Hiểu cách học hiệu quả trong khóa học.
- Làm quen với Git để quản lý và lưu trữ bài tập.
- Định hướng lộ trình học tập lâu dài.

## Nội dung

### 1. Giới thiệu khóa học
- **Mục tiêu chính**: Giúp các bạn hiểu cách một trang web hoạt động và tự xây dựng ứng dụng web cơ bản bằng Node.js, Express, và SQLite.  
  - **Điểm nhấn cuối khóa**:  
    - **Final Project (Buổi 9)**: Các bạn sẽ xây dựng một **Notes App hoàn chỉnh** (tương tự Google Keep) với các chức năng đăng nhập, thêm ghi chú, xem danh sách ghi chú, và xóa ghi chú. Đây là cơ hội để áp dụng toàn bộ kiến thức từ frontend, backend đến database.  
    - **Deploy lên internet (Buổi 10)**: Sau khi hoàn thiện, các bạn sẽ triển khai Notes App lên một dịch vụ miễn phí như **Render** hoặc **Vercel**, nhận được một URL công khai để chia sẻ sản phẩm "live" với bạn bè.  
- **Cách học**:  
  - Mỗi buổi gồm lý thuyết ngắn (30-40 phút) và thực hành (60-90 phút).  
  - Làm bài tập sau mỗi buổi để củng cố kiến thức.  
  - Tự tìm hiểu thêm qua các tài liệu được gợi ý (keyword).  
  - Cuối khóa, bạn sẽ có một dự án thực tế để tự hào và thêm vào portfolio.

### 2. Roadmap học lập trình web
- **Frontend Roadmap**: [https://roadmap.sh/frontend](https://roadmap.sh/frontend)  
  - Các bước cơ bản: HTML, CSS, JavaScript → Responsive Design → Framework (React/Vue).  
  - Gợi ý: Tự tick vào các mục đã học sau mỗi buổi (ví dụ: HTML, CSS ở Buổi 2).  
- **Backend Roadmap**: [https://roadmap.sh/backend](https://roadmap.sh/backend)  
  - Các bước cơ bản: Node.js, Express → API → Database (SQL/NoSQL).  
  - Gợi ý: Theo dõi tiến độ từ Buổi 3 (Express) đến Buổi 7 (Database).  
- **Cách sử dụng roadmap**:  
  - In hoặc lưu file PDF roadmap, đánh dấu các kỹ năng đã nắm sau mỗi buổi.  
  - Đặt mục tiêu hoàn thành ít nhất "Beginner" level trong 2-3 tuần.

### 3. Tầm quan trọng của version control
- **Tại sao cần Git?**: Git giúp quản lý code, theo dõi thay đổi, và làm việc nhóm hiệu quả.  
- **Ví dụ**: Nếu code sai, bạn có thể quay lại phiên bản trước dễ dàng thay vì phải viết lại từ đầu.

### 4. Hướng dẫn sử dụng Git và GitHub
1. **Cài đặt Git**:  
   - Tải Git tại [git-scm.com](https://git-scm.com) và chạy `git --version` để kiểm tra.  
2. **Tạo repository trên GitHub**:  
   - Đăng ký tài khoản GitHub ([github.com](https://github.com)).  
   - Tạo một repository mới (public/private tùy chọn).  
3. **Các lệnh Git cơ bản**:  
   - Khởi tạo Git trong thư mục dự án:  
     ```
     git init
     ```
   - Thêm file:  
     ```
     git add .
     ```
   - Commit thay đổi:  
     ```
     git commit -m "Hoàn thành bài tập Buổi X"
     ```
   - Liên kết với GitHub:  
     ```
     git remote add origin <URL-repository>
     ```
   - Push code lên GitHub:  
     ```
     git push -u origin main
     ```
4. **Thực hành**:  
   - Tạo file `README.md` với nội dung "Khóa học Lập trình Web".  
   - Commit và push file này lên GitHub.

### 5. Công cụ hỗ trợ
- **Visual Studio Code**: Sử dụng VS Code làm công cụ chính để viết code.  
  - Gợi ý: Cài extension **GitLens** để trực quan hóa Git (xem lịch sử commit, branch).  
- **Các công cụ khác**: Trình duyệt (Chrome/Firefox) để kiểm tra web, terminal để chạy lệnh.

### 6. Kỹ năng mềm
- **Quản lý thời gian**: Chia nhỏ bài tập thành các bước (ví dụ: 30 phút code, 15 phút debug).  
- **Tư duy lập trình**: Suy nghĩ logic trước khi code, không chỉ copy từ hướng dẫn.  
- **Debug code**: Khi gặp lỗi, đọc kỹ thông báo lỗi, tìm kiếm trên Google với từ khóa lỗi.

### 7. Một số lưu ý
- **Thời gian học**: Dành ít nhất 2-3 giờ sau mỗi buổi để ôn lại và làm bài tập.  
- **Hỏi đáp**: Đặt câu hỏi nếu không hiểu, đừng ngại thử nghiệm code.  
- **Tài liệu tham khảo**: MDN Web Docs, Express.js Docs, Git Documentation.

### 8. Kế hoạch dài hạn
- **Sau khóa học**: Thử làm một dự án nhỏ (ví dụ: clone giao diện Google Keep) để áp dụng kiến thức.  
- **Bước tiếp theo**: Học thêm nodejs/express, các frontend framework (React, Vue), API, hoặc deploy web lên Heroku/Netlify.

## Bài tập
- Cài đặt Git và tạo một repository trên GitHub.  
- Push file `README.md` lên repository của bạn.  
- Chia sẻ link repository với giảng viên.
