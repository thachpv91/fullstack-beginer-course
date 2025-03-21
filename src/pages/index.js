import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css'; // File CSS tùy chỉnh

export default function Home() {
  return (
    <Layout title="Khóa học Lập trình Web" description="Roadmap học lập trình web cơ bản">
      <main className={styles.main}>
        <h1>Roadmap Khóa học Lập trình Web</h1>
        <p>Chào mừng bạn đến với khóa học lập trình web cơ bản! Dưới đây là lộ trình học tập từ Buổi 0 đến Buổi 10.</p>
        
        <div className={styles.roadmap}>
          <h2>Lộ trình chi tiết</h2>
          <ul>
            <li>
              <Link to="/docs/buoi0">Buổi 0: Welcome - Hướng dẫn cách học và Git</Link>
              <p>Cài đặt môi trường, làm quen với Git và định hướng học tập.</p>
            </li>
            <li>
              <Link to="/docs/buoi1">Buổi 1: Giới thiệu tổng quan và "Hello World" với Node.js</Link>
              <p>Chạy web đầu tiên với Node.js và hiểu client-server.</p>
            </li>
            <li>
              <Link to="/docs/buoi2">Buổi 2: HTML, CSS, JS cơ bản và phục vụ file tĩnh</Link>
              <p>Học frontend cơ bản và phục vụ file HTML.</p>
            </li>
            <li>
              <Link to="/docs/buoi3">Buổi 3: Router thủ công và Express.js</Link>
              <p>Làm quen với router và framework Express.</p>
            </li>
            <li>
              <Link to="/docs/buoi4">Buổi 4: Middleware và Static Files</Link>
              <p>Hiểu middleware và cách phục vụ file tĩnh.</p>
            </li>
            <li>
              <Link to="/docs/buoi5">Buổi 5: Session, Cookie và Login cơ bản</Link>
              <p>Xử lý đăng nhập với session và cookie.</p>
            </li>
            <li>
              <Link to="/docs/buoi6">Buổi 6: Templating với EJS</Link>
              <p>Sử dụng template engine EJS.</p>
            </li>
            <li>
              <Link to="/docs/buoi7">Buổi 7: Database cơ bản và kết nối</Link>
              <p>Làm việc với SQLite để lưu dữ liệu.</p>
            </li>
            <li>
              <Link to="/docs/buoi8">Buổi 8: Hoàn thiện Notes App</Link>
              <p>Củng cố kiến thức qua ứng dụng Notes.</p>
            </li>
            <li>
              <Link to="/docs/buoi9">Buổi 9: Final Project - Notes App hoàn chỉnh</Link>
              <p>Xây dựng ứng dụng Notes đầy đủ tính năng.</p>
            </li>
            <li>
              <Link to="/docs/buoi10">Buổi 10: Deploy Notes App lên Render/Vercel</Link>
              <p>Đưa ứng dụng lên internet với Render hoặc Vercel.</p>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}