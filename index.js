/**
 * index.js — Script chạy trong DevTools Console để scrape câu hỏi
 * từ các trang quiz (Canvas LMS, Moodle, v.v.)
 *
 * Cách dùng:
 * 1. Mở trang quiz xem kết quả (đã submit)
 * 2. Mở DevTools > Console
 * 3. Paste toàn bộ nội dung file này và nhấn Enter
 * 4. Copy output JSON rồi dán vào questions1.js / questions2.js
 */

(function scrapeQuestions() {
  const listQues = document.querySelectorAll(".quiz_sortable.question_holder");

  if (!listQues.length) {
    console.warn("⚠ Không tìm thấy câu hỏi nào. Hãy kiểm tra lại trang.");
    return;
  }

  // Chỉ lấy câu đúng (bỏ qua câu đã trả lời sai)
  const questions = Array.from(listQues).filter(
    (item) => !item.querySelector(".answer_arrow.incorrect")
  );

  const listData = questions
    .map((item) => {
      const textEl = item.querySelector(".question_text.user_content.enhanced");
      if (!textEl) return null;

      const id = textEl.id || null;
      const answers = item.querySelectorAll(".select_answer.answer_type");
      let answer = "";

      const options = Array.from(answers).map((opt) => {
        const inputEl = opt.querySelector("input");
        const textEl = opt.querySelector(".answer_text");
        const text = textEl ? textEl.innerText.trim() : "";
        if (inputEl && inputEl.checked) answer = text;
        return text;
      });

      return {
        title: textEl.innerText.trim(),
        options,
        answer: [answer],
        id,
      };
    })
    .filter(Boolean);

  console.log(`✅ Đã scrape ${listData.length} câu hỏi.`);
  console.log(JSON.stringify(listData, null, 2));
  return listData;
})();
