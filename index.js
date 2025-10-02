const listQues = document.querySelectorAll(".quiz_sortable.question_holder");

const questions = Array.from(listQues).filter((item) => {
  const check = item.querySelector(".answer_arrow.incorrect");
  console.log(check);

  return !check;
});

const listData = questions.map((item) => {
  const text = item.querySelector(".question_text.user_content.enhanced");
  const id = text ? text.id : null;
  const answers = item.querySelectorAll(".select_answer.answer_type");

  let answer = "";

  const options = Array.from(answers).map((opt) => {
    const check = opt.querySelector("input").checked;
    const text = opt.querySelector(".answer_text").innerText.trim();

    if (check) {
      answer = text;
    }
    return text;
  });

  return {
    text: text.innerText.trim(),
    options,
    answer,
    id,
  };
});
