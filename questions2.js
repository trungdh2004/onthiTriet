const newMap = new Map();

export const questions2 = [
  {
    text: "Giai cấp công nhân lãnh đạo cách mạng thông qua đâu?",
    options: [
      "Nhà nước xã hội chủ nghĩa.",
      "Mặt trận dân tộc thống nhất.",
      "Đảng Cộng sản.",
      "Các tổ chức quần chúng.",
    ],
    answer: "Đảng Cộng sản.",
    id: "question_1056418_question_text",
  },
  {
    text: "Khái niệm giai cấp công nhân được xác định trên những phương diện nào?",
    options: [
      "Phương diện kinh tế – xã hội và phương diện đạo đức.",
      "Phương diện kinh tế – xã hội và phương diện chính trị – xã hội.",
      "Phương diện kinh tế – xã hội và phương diện tư tưởng.",
      "Phương diện kinh tế – xã hội và phương diện văn hóa.",
    ],
    answer: "Phương diện kinh tế – xã hội và phương diện chính trị – xã hội.",
    id: "question_1056417_question_text",
  },
  {
    text: "Sứ mệnh lịch sử của giai cấp công nhân bao gồm mấy nội dung?",
    options: ["4", "2", "3", "1"],
    answer: "3",
    id: "question_1056416_question_text",
  },
  {
    text: "Trong xã hội tư bản chủ nghĩa, địa vị xã hội của giai cấp công nhân biểu hiện như thế nào?",
    options: [
      "Giai cấp có lợi ích cơ bản thống nhất với lợi ích của giai cấp tư sản.",
      "Giai cấp có tư liệu sản xuất nên làm chủ giá trị thặng dư.",
      "Giai cấp không có tư liệu sản xuất chủ yếu, phải bán sức lao động cho nhà tư bản và bị nhà tư bản bóc lột giá trị thặng dư.",
      "Là giai cấp thống trị và chiếm đoạt giá trị thặng dư.",
    ],
    answer:
      "Giai cấp không có tư liệu sản xuất chủ yếu, phải bán sức lao động cho nhà tư bản và bị nhà tư bản bóc lột giá trị thặng dư.",
    id: "question_1056420_question_text",
  },
  {
    text: "Điểm giống nhau của giai cấp công nhân hiện đại so với công nhân thế kỷ XIX là gì?",
    options: [
      "Giai cấp công nhân nắm giữ tư liệu sản xuất chủ yếu của xã hội.",
      "Giai cấp công nhân không bị bóc lột.",
      "Giai cấp công nhân có cuộc sống giàu có.",
      "Giai cấp công nhân là lực lượng sản xuất hàng đầu của xã hội.",
    ],
    answer: "Giai cấp công nhân là lực lượng sản xuất hàng đầu của xã hội.",
    id: "question_1056421_question_text",
  },
  {
    text: "Luận điểm “Thực hiện sự nghiệp giải phóng thế giới ấy đó là sứ mệnh lịch sử của giai cấp vô sản hiện đại” là của ai?",
    options: ["Ph.Ăngghen.", "V.I.Lênin.", "C.Mác.", "C.Mác và Ph.Ăngghen."],
    answer: "C.Mác.",
    id: "question_1056424_question_text",
  },
  {
    text: "Giai cấp công nhân Việt Nam xuất thân từ giai cấp nào?",
    options: [
      "Tầng lớp trí thức.",
      "Giai cấp tư sản.",
      "Giai cấp nông dân và các tầng lớp lao động khác.",
      "Giai cấp địa chủ.",
    ],
    answer: "Giai cấp nông dân và các tầng lớp lao động khác.",
    id: "question_1056427_question_text",
  },
  {
    text: "Thực hiện sứ mệnh lịch sử của giai cấp công nhân trên thế giới hiện nay được thể hiện trên mấy nội dung?",
    options: ["2", "3", "1", "4"],
    answer: "3",
    id: "question_1056426_question_text",
  },
  {
    text: "Nhân tố chủ quan nào có ý nghĩa quyết định đối với việc thực hiện sứ mệnh lịch sử của giai cấp công nhân?",
    options: [
      "Vai trò của giai cấp tư sản.",
      "Vai trò của tầng lớp trí thức.",
      "Vai trò của giai cấp công nhân.",
      "Vai trò lãnh đạo của Đảng cộng sản.",
    ],
    answer: "Vai trò lãnh đạo của Đảng cộng sản.",
    id: "question_1056422_question_text",
  },
  {
    text: "Luận điểm “Tất cả các giai cấp khác đều suy tàn và tiêu vong cùng với sự phát triển của đại công nghiệp, còn giai cấp vô sản lại là sản phẩm của bản thân nền đại công nghiệp” là của ai?",
    options: ["Ph.Ăngghen.", "V.I.Lênin.", "C.Mác và Ph.Ăngghen.", "C.Mác."],
    answer: "C.Mác và Ph.Ăngghen.",
    id: "question_1056423_question_text",
  },
  {
    text: "Nội dung văn hóa, tư tưởng của sứ mệnh lịch sử giai cấp công nhân Việt Nam hiện nay là gì?",
    options: [
      "Xây dựng nền văn hóa Việt Nam tiên tiến đậm đà bản sắc dân tộc với nội dung cốt lõi là xây dựng con người mới xã hội chủ nghĩa.",
      "Là lực lượng chủ yếu tham gia phát triển kinh tế thị trường hiện đại, là lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước.",
      "Xây dựng khối liên minh công – nông – trí thức.",
      "Giữ vững bản chất giai cấp công nhân của Đảng, vai trò tiên phong, gương mẫu của cán bộ, đảng viên.",
    ],
    answer:
      "Xây dựng nền văn hóa Việt Nam tiên tiến đậm đà bản sắc dân tộc với nội dung cốt lõi là xây dựng con người mới xã hội chủ nghĩa.",
    id: "question_1056429_question_text",
  },
  {
    text: "Trong chủ nghĩa tư bản, giai cấp công nhân có lợi ích cơ bản đối lập trực tiếp với giai cấp nào?",
    options: [
      "Giai cấp tiểu tư sản.",
      "Giai cấp địa chủ.",
      "Giai cấp tư sản.",
      "Giai cấp nông dân.",
    ],
    answer: "Giai cấp tư sản.",
    id: "question_1056430_question_text",
  },
  {
    text: "Quy luật ra đời của Đảng Cộng sản Việt Nam là gì?",
    options: [
      "Sự kết hợp giữa chủ nghĩa Mác với phong trào công nhân.",
      "Sự kết hợp giữa chủ nghĩa Mác – Lênin với phong trào công nhân và phong trào yêu nước.",
      "Sự kết hợp giữa chủ nghĩa Mác – Lênin với tư tưởng Hồ Chí Minh.",
      "Sự kết hợp giữa chủ nghĩa yêu nước với phong trào công nhân.",
    ],
    answer:
      "Sự kết hợp giữa chủ nghĩa Mác – Lênin với phong trào công nhân và phong trào yêu nước.",
    id: "question_1056433_question_text",
  },
  {
    text: "Luận điểm “Lực lượng sản xuất hàng đầu của toàn nhân loại là công nhân, là người lao động” là của ai?",
    options: ["V.I.Lênin.", "C.Mác và Ph.Ăngghen.", "C.Mác.", "Ph.Ăngghen."],
    answer: "V.I.Lênin.",
    id: "question_1056434_question_text",
  },
  {
    text: "Tại sao giai cấp công nhân là giai cấp có khả năng lãnh đạo cách mạng?",
    options: [
      "Là giai cấp tiến tiến, có tinh thần cách mạng triệt để.",
      "Là giai cấp tiến tiến.",
      "Là giai cấp bị bóc lột; giai cấp tiên tiến, có tinh thần cách mạng triệt để, có tính kỷ luật.",
      "Là giai cấp bị bóc lột; giai cấp tiên tiến, có tinh thần cách mạng triệt để, có tính kỷ luật, có bản chất quốc tế.",
    ],
    answer:
      "Là giai cấp bị bóc lột; giai cấp tiên tiến, có tinh thần cách mạng triệt để, có tính kỷ luật, có bản chất quốc tế.",
    id: "question_1056436_question_text",
  },
  {
    text: "Chủ nghĩa xã hội khoa học do ai sáng lập?",
    options: [
      "C.Mác và V.I.Lênin.",
      "C.Mác và Hêghen.",
      "C.Mác và Ph.Ăngghen.",
      "Ăngghen và Hêghen.",
    ],
    answer: "C.Mác và Ph.Ăngghen.",
    id: "question_1056380_question_text",
  },
  {
    text: "Chủ nghĩa xã hội khoa học ra đời ở thế kỷ nào?",
    options: ["Thế kỷ XX.", "Thế kỷ XVII.", "Thế kỷ XVIII.", "Thế kỷ XIX."],
    answer: "Thế kỷ XIX.",
    id: "question_1056379_question_text",
  },
  {
    text: "Cuộc cách mạng Tháng Mười Nga 1917 do ai lãnh đạo?",
    options: ["C.Mác.", "Ph.Ăngghen.", "Hồ Chí Minh.", "V.I.Lênin."],
    answer: "V.I.Lênin.",
    id: "question_1056383_question_text",
  },
  {
    text: "Chủ nghĩa xã hội khoa học trải qua mấy giai đoạn phát triển cơ bản?",
    options: ["5", "4", "2", "3"],
    answer: "3",
    id: "question_1056381_question_text",
  },
  {
    text: "Cơ sở phương pháp luận để nghiên cứu Chủ nghĩa xã hội khoa học là gì?",
    options: [
      "Triết học cổ điển Đức.",
      "Kinh tế chính trị cổ điển Anh.",
      "Kinh tế chính trị Mác – Lênin.",
      "Triết học Mác – Lênin.",
    ],
    answer: "Triết học Mác – Lênin.",
    id: "question_1056382_question_text",
  },
  {
    text: "Đối tượng nghiên cứu của Chủ nghĩa xã hội khoa học là gì?",
    options: [
      "Những quy luật chính trị – xã hội của quá trình phát triển hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
      "Quá trình phát triển của hình thái kinh tế – xã hội tư bản chủ nghĩa.",
      "Những quy luật, tính quy luật chính trị xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
      "Quá trình phát triển của hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
    ],
    answer:
      "Những quy luật, tính quy luật chính trị xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
    id: "question_1056387_question_text",
  },
  {
    text: "Chọn phương án đúng nhất: Những phát minh nào là tiền đề khoa học tự nhiên đưa tới sự ra đời của Chủ nghĩa xã hội khoa học?",
    options: [
      "Học thuyết tiến hóa; Học thuyết tế bào.",
      "Học thuyết tế bào; Định luật bảo toàn và chuyển hóa năng lượng.",
      "Học thuyết tiến hóa; Học thuyết tế bào; Định luật bảo toàn và chuyển hóa năng lượng.",
      "Học thuyết tiến hóa; Định luật bảo toàn và chuyển hóa năng lượng.",
    ],
    answer:
      "Học thuyết tiến hóa; Học thuyết tế bào; Định luật bảo toàn và chuyển hóa năng lượng.",
    id: "question_1056386_question_text",
  },
  {
    text: "Có mấy phát kiến của C.Mác và Ph.Ăngghen đưa tới sự ra đời của Chủ nghĩa xã hội khoa học?",
    options: ["5", "2", "4", "3"],
    answer: "3",
    id: "question_1056385_question_text",
  },
  {
    text: "C.Mác sinh ngày tháng năm nào?",
    options: ["5/5/1818", "14/4/1818", "5/3/1818", "14/3/1918"],
    answer: "5/5/1818",
    id: "question_1056389_question_text",
  },
  {
    text: "Phát kiến về Chủ nghĩa duy vật lịch sử của C.Mác và Ăngghen đã luận giải sự phát triển của xã hội trên phương diện nào?",
    options: [
      "Phương diện chính trị – xã hội.",
      "Phương diện triết học.",
      "Phương diện văn hóa.",
      "Phương diện kinh tế.",
    ],
    answer: "Phương diện triết học.",
    id: "question_1056390_question_text",
  },
  {
    text: "Nhà tư tưởng xã hội chủ nghĩa không tưởng nào đã tiến hành thực nghiệm xã hội cộng sản trong lòng xã hội tư bản?",
    options: ["Rôbớt Ôoen.", "Sáclơ Phuriê.", "Xanh Ximông.", "Grắccơ Babớp."],
    answer: "Rôbớt Ôoen.",
    id: "question_1056388_question_text",
  },
  {
    text: "Những nhà tư tưởng tiêu biểu của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX là ai?",
    options: [
      "Grắccơ Babớp, Xanh Ximông, Sáclơ Phuriê.",
      "Xanh Ximông, Sáclơ Phuriê, Rôbớt Ôoen.",
      "Grắccơ Babớp, Xanh Ximông, Tômát Morơ.",
      "Xanh Ximông, Sáclơ Phuriê, G. Mably.",
    ],
    answer: "Xanh Ximông, Sáclơ Phuriê, Rôbớt Ôoen.",
    id: "question_1056384_question_text",
  },
  {
    text: "Người đầu tiên đưa chủ nghĩa xã hội từ một học thuyết thành thực tiễn sinh động là ai?",
    options: ["V.I.Lênin.", "C.Mác.", "Ph.Ăngghen", "C.Mác và Ph.Ăngghen."],
    answer: "V.I.Lênin.",
    id: "question_1056391_question_text",
  },
  {
    text: "Phạm trù nào được coi là cơ bản nhất, là xuất phát điểm của Chủ nghĩa xã hội khoa học?",
    options: [
      "Xã hội chủ nghĩa.",
      "Sứ mệnh lịch sử của giai cấp công nhân.",
      "Giai cấp công nhân.",
      "Chuyên chính vô sản.",
    ],
    answer: "Sứ mệnh lịch sử của giai cấp công nhân.",
    id: "question_1056392_question_text",
  },
  {
    text: "Tác phẩm “Phê phán cương lĩnh Gôta” là của ai ?",
    options: ["Ăngghen.", "Hồ Chí Minh.", "V.I.Lênin.", "C.Mác."],
    answer: "C.Mác.",
    id: "question_1056394_question_text",
  },
]
  .filter((qus) => {
    if (newMap.has(qus.id)) return false;
    newMap.set(qus.id, true);
    return true;
  })
  .map((data) => ({
    title: data.text,
    ...data,
  }));
