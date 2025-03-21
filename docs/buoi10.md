---
id: buoi10
title: "Buổi 10: Deployment"
description: Deploy lên Render/Vercel
---

# Buổi 10: Deploy Notes App lên Render hoặc Vercel

## Mục tiêu
- Hiểu cách triển khai ứng dụng web lên internet.
- Deploy Notes App lên Render hoặc Vercel để xem sản phẩm "live".
- Làm quen với quy trình triển khai thực tế và chia sẻ sản phẩm.

## Nội dung

### 1. Tổng quan về deployment
- **Deployment là gì?**: Quá trình đưa ứng dụng từ máy local lên server để người khác có thể truy cập qua internet.
- **Lý do chọn Render hoặc Vercel**:
  - **Render**: Hỗ trợ cả backend Node.js và database miễn phí (với giới hạn), dễ cấu hình.
  - **Vercel**: Tốt cho ứng dụng serverless, tích hợp GitHub mượt mà, nhưng cần điều chỉnh để chạy Express full-time.
- **Mục tiêu**: Sau buổi này, các bạn sẽ có link công khai để khoe sản phẩm với bạn bè.

### 2. Chuẩn bị trước khi deploy
- **Kiểm tra dự án**: Đảm bảo Notes App từ Buổi 9 chạy tốt trên local (`node server.js`).
- **Tối ưu hóa**:
  - Thêm file `.gitignore` để loại bỏ `node_modules`:
    ```
    node_modules/
    *.log
    ```
  - Đảm bảo có file `package.json` với lệnh start:
    ```json
    "scripts": {
      "start": "node server.js"
    }
    ```
- **Push code lên GitHub**: Nếu chưa làm, tạo repository và push toàn bộ code từ Buổi 9.

### 3. Deploy lên Render
1. **Đăng ký tài khoản Render**:
   - Truy cập [render.com](https://render.com) và đăng ký bằng GitHub.
2. **Tạo Web Service**:
   - Từ dashboard, chọn **New > Web Service**.
   - Kết nối repository GitHub chứa Notes App.
3. **Cấu hình**:
   - **Name**: Đặt tên (ví dụ: `notes-app`).
   - **Environment**: Chọn `Node`.
   - **Build Command**: `npm install`.
   - **Start Command**: `npm start`.
   - **Instance Type**: Chọn `Free`.
4. **Deploy**:
   - Nhấn **Create Web Service**, Render sẽ tự động build và deploy.
   - Sau khi hoàn tất, bạn nhận được URL dạng `https://notes-app.onrender.com`.
5. **Kiểm tra**:
   - Truy cập URL, đăng nhập và thử các tính năng (thêm/xóa ghi chú).
   - Lưu ý: Tầng miễn phí của Render sẽ "ngủ" sau 15 phút không hoạt động, mất khoảng 30 giây để khởi động lại.

### 4. Deploy lên Vercel (Tùy chọn thay thế)
- **Lưu ý**: Vercel phù hợp hơn với ứng dụng serverless. Để chạy Express full-time như Notes App, cần cấu hình thêm.
1. **Đăng ký tài khoản Vercel**:
   - Truy cập [vercel.com](https://vercel.com) và đăng ký bằng GitHub.
2. **Tạo dự án**:
   - Từ dashboard, chọn **New Project** > Import repository GitHub.
3. **Cấu hình Serverless**:
   - Tạo file `vercel.json` trong thư mục gốc:
     ```json
     {
       "version": 2,
       "builds": [
         {
           "src": "server.js",
           "use": "@vercel/node"
         }
       ],
       "routes": [
         {
           "src": "/(.*)",
           "dest": "server.js"
         }
       ]
     }
     ```
   - Điều chỉnh `server.js` để lắng nghe port từ Vercel:
     ```javascript
     const port = process.env.PORT || 3000;
     app.listen(port, () => {
       console.log(`Notes App running on port ${port}`);
     });
     ```
4. **Deploy**:
   - Nhấn **Deploy**, Vercel sẽ build và cung cấp URL dạng `https://notes-app.vercel.app`.
5. **Kiểm tra**:
   - Truy cập URL và kiểm tra tính năng.
   - Lưu ý: SQLite trong Vercel sẽ lưu ở bộ nhớ tạm (ephemeral), không phù hợp cho dữ liệu lâu dài. Để lưu lâu dài, cần kết nối database bên ngoài (như MongoDB Atlas).

### 5. So sánh Render và Vercel
- **Render**: Dễ deploy ứng dụng Node.js truyền thống, hỗ trợ SQLite local, nhưng có độ trễ khi "ngủ".
- **Vercel**: Tốt cho serverless, nhanh, nhưng cần cấu hình thêm và không lưu trữ SQLite lâu dài.
- **Gợi ý**: Dùng Render cho dự án này vì đơn giản hơn với sinh viên mới học.

### 6. Chia sẻ sản phẩm
- Sau khi deploy, sao chép URL và gửi cho bạn bè hoặc giảng viên để khoe thành quả.
- Push code cuối cùng lên GitHub với ghi chú: `git commit -m "Deploy Notes App thành công"`.

## Bài tập
- Deploy Notes App lên Render (bắt buộc).
- Thử deploy lên Vercel (tùy chọn) và so sánh trải nghiệm.
- Gửi link ứng dụng "live" cho giảng viên.

## Lưu ý
- **Thời gian**: 1 giờ hướng dẫn + 1-2 giờ thực hành.
- **Debug**: Nếu gặp lỗi, kiểm tra log trên dashboard của Render/Vercel và hỏi giảng viên.
- **Mở rộng**: Tìm hiểu cách kết nối database cloud (như MongoDB Atlas) để thay thế SQLite.