# Ôn Thi Triết

Ứng dụng trắc nghiệm ôn thi môn Triết học. **[👉 Xem demo](https://onthi-triet.vercel.app)**

## ✨ Tính năng (v2)

- 🎯 Câu hỏi xáo trộn ngẫu nhiên, tự động loại trùng lặp
- ⏱ Đếm thời gian mỗi câu
- 📊 Progress bar và tỷ lệ điểm realtime
- 🌙 Dark mode (lưu tự động)
- ⌨️ Phím tắt: `1` `2` `3` `4` chọn đáp án, `Enter` câu tiếp
- 📋 Hiển thị danh sách câu sai kèm đáp án đúng
- 🏁 Modal kết quả cuối với tỷ lệ % và nút làm lại

## 🛠 Công nghệ

- HTML5 + Vanilla JavaScript (ES Modules)
- CSS thuần (không phụ thuộc CDN ngoài)
- Deploy: Vercel

## 📂 Cấu trúc

```
├── index.html      # Ứng dụng chính
├── index.js        # Script scrape câu hỏi từ trang quiz (DevTools Console)
├── questions1.js   # Bộ câu hỏi 1
├── questions2.js   # Bộ câu hỏi 2 (đang dùng)
└── data.js         # Dữ liệu thô
```

## 🔧 Thêm câu hỏi mới

1. Mở trang quiz đã nộp bài trong trình duyệt
2. Mở DevTools Console (`F12`)
3. Paste nội dung `index.js` và nhấn `Enter`
4. Copy JSON output, dán vào `questions1.js` hoặc `questions2.js`
