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
  {
    text: "Quá độ lên chủ nghĩa xã hội có mấy đặc điểm cơ bản?",
    options: ["3", "5", "4", "2"],
    answer: "4",
    id: "question_1056461_question_text",
  },
  {
    text: "Theo quan điểm chủ nghĩa Mác – Lênin, xã hội xã hội chủ nghĩa có mấy đặc trưng cơ bản?",
    options: ["5", "4", "6", "3"],
    answer: "6",
    id: "question_1056462_question_text",
  },
  {
    text: "Hai hình thức quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội là gì?",
    options: [
      "Quá độ cơ bản và quá độ không cơ bản.",
      "Quá độ nhanh chóng và quá độ lâu dài.",
      "Quá độ khách quan và quá độ chủ quan.",
      "Quá độ trực tiếp và quá độ gián tiếp.",
    ],
    answer: "Quá độ trực tiếp và quá độ gián tiếp.",
    id: "question_1056460_question_text",
  },
  {
    text: "Xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng có mấy đặc trưng?",
    options: ["10", "4", "8", "6"],
    answer: "8",
    id: "question_1056463_question_text",
  },
  {
    text: "Hai giai đoạn chính của hình thái kinh tế – xã hội Cộng sản chủ nghĩa là gì?",
    options: [
      "Chủ nghĩa xã hội và chủ nghĩa cộng sản.",
      "Chủ nghĩa tư bản và chủ nghĩa xã hội.",
      "Thời kỳ quá độ và chủ nghĩa xã hội.",
      "Thời kỳ quá độ và chủ nghĩa cộng sản.",
    ],
    answer: "Chủ nghĩa xã hội và chủ nghĩa cộng sản.",
    id: "question_1056459_question_text",
  },
  {
    text: "Đặc trưng về mặt văn hóa của chủ nghĩa xã hội được thể hiện như thế nào?",
    options: [
      "Có nền văn hóa phát triển cao, kế thừa và phát huy những giá trị của văn hóa dân tộc và tinh hóa văn hóa nhân loại.",
      "Xây dựng nền văn hóa mới với nền tảng là xây dựng con người mới xã hội chủ nghĩa.",
      "Xây dựng nền văn hóa trên cơ sở văn hóa truyền thống.",
      "Xây dựng nền văn hóa hiện đại.",
    ],
    answer:
      "Có nền văn hóa phát triển cao, kế thừa và phát huy những giá trị của văn hóa dân tộc và tinh hóa văn hóa nhân loại.",
    id: "question_1056468_question_text",
  },
  {
    text: "Đặc trưng của chủ nghĩa xã hội ở Việt Nam về mặt văn hóa được Đảng ta xác định tại Đại hội XI là gì?",
    options: [
      "Có nền văn hóa phát triển cao, tiếp thu những giá trị văn hóa dân tộc và nhân loại.",
      "Có nền văn hóa hiện đại.",
      "Có nền văn hóa tiên tiến đậm đà bản sắc dân tộc.",
      "Có nền văn hóa phát triển cao dựa trên việc phát huy những giá trị văn hóa dân tộc.",
    ],
    answer: "Có nền văn hóa tiên tiến đậm đà bản sắc dân tộc.",
    id: "question_1056472_question_text",
  },
  {
    text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là bỏ qua yếu tố nào của chủ nghĩa tư bản?",
    options: [
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư tưởng tư bản chủ nghĩa.",
      "Bỏ qua chế độ áp bức bóc lột của giai cấp tư sản.",
      "Bỏ qua cơ sở kinh tế của chủ nghĩa tư bản.",
      "Bỏ qua nhà nước của giai cấp tư sản.",
    ],
    answer:
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư tưởng tư bản chủ nghĩa.",
    id: "question_1056466_question_text",
  },
  {
    text: "Hai đặc trưng của chủ nghĩa xã hội được Đảng ta bổ sung tại Đại hội XI so với Đại hội VII là gì?",
    options: [
      "(1) Có nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo; (2) Do nhân dân làm chủ.",
      "(1) Do nhân dân làm chủ; (2) Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
      "(1) Dân giàu nước mạnh dân chủ công bằng, văn minh; (2) Do nhân dân làm chủ.",
      "(1) Dân giàu nước mạnh dân chủ công bằng, văn minh; (2) Có nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo.",
    ],
    answer:
      "(1) Dân giàu nước mạnh dân chủ công bằng, văn minh; (2) Có nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo.",
    id: "question_1056465_question_text",
  },
  {
    text: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội được Đảng ta nêu ra ở Đại hội nào?",
    options: ["Đại hội IV.", "Đại hội VII.", "Đại hội VIII.", "Đại hội VI."],
    answer: "Đại hội VII.",
    id: "question_1056467_question_text",
  },
  {
    text: "Luận điểm “Không thể nghi ngờ gì được rằng giữa chủ nghĩa tư bản và chủ nghĩa cộng sản, có một thời kỳ quá độ nhất định” là của ai ?",
    options: ["Ph.Ăngghen", "V.I.Lênin.", "C.Mác.", "C.Mác và Ph.Ăngghen."],
    answer: "V.I.Lênin.",
    id: "question_1056469_question_text",
  },
  {
    text: "Đặc trưng về mặt kinh tế của chủ nghĩa xã hội được thể hiện như thế nào?",
    options: [
      "Có nền kinh tế phát triển cao dựa trên chế độ tư hữu về tư liệu sản xuất.",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại.",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất.",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu tư liệu sản xuất chủ yếu.",
    ],
    answer:
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu tư liệu sản xuất chủ yếu.",
    id: "question_1056464_question_text",
  },
  {
    text: "Chủ nghĩa xã hội phát triển thành hệ thống trên thế giới kể từ khi nào?",
    options: [
      "Sau chiến tranh thế giới thứ hai.",
      "Thời kỳ hội nhập kinh tế quốc tế.",
      "Cuối thế kỷ XIX.",
      "Sau cách mạng Tháng Mười Nga.",
    ],
    answer: "Sau chiến tranh thế giới thứ hai.",
    id: "question_1056473_question_text",
  },
  {
    text: "Sự khủng hoảng và sụp đổ của Liên Xô và các nước Đông Âu diễn ra vào thời gian nào?",
    options: [
      "4/1990 – 9/1991",
      "4/1989 – 9/1991",
      "Trong năm 1991",
      "4/1988 – 9/1991",
    ],
    answer: "4/1989 – 9/1991",
    id: "question_1056475_question_text",
  },
  {
    text: "Đảng Cộng sản Việt Nam nhận định về sự khủng hoảng của Liên Xô: “Do duy trì quá lâu mô hình cũ của chủ nghĩa xã hội, chậm trễ trong cách mạng khoa học và công nghệ”. Luận điểm trên được thể hiện ở đâu?",
    options: [
      "Hội nghị lần thứ năm Ban Chấp hành Trung ương (khóa VIII) (1998).",
      "Báo cáo chính trị tại Văn kiện Đại hội Đại biểu toàn quốc lần thứ VII (1991).",
      "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (1991).",
      "Văn kiện Đại hội Đại biểu toàn quốc lần thứ VIII (1996).",
    ],
    answer:
      "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (1991).",
    id: "question_1056478_question_text",
  },
  {
    text: "Mối quan hệ giữa dân chủ và nhà nước xã hội chủ nghĩa được thể hiện như thế nào?",
    options: [
      "Nhà nước xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của nền dân chủ.",
      "Dân chủ xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa.",
      "Nhà nước xã hội chủ nghĩa tách rời nền dân chủ xã hội chủ nghĩa.",
      "Dân chủ xã hội chủ nghĩa nằm trong nhà nước xã hội chủ nghĩa.",
    ],
    answer:
      "Dân chủ xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa.",
    id: "question_1056324_question_text",
  },
  {
    text: "Dân chủ là gì?",
    options: [
      "Là quyền lực thuộc về nhân dân.",
      "Là quyền tự do của mỗi người.",
      "Là quyền lực thuộc về giai cấp thống trị.",
      "Là quyền của con người.",
    ],
    answer: "Là quyền lực thuộc về nhân dân.",
    id: "question_1056320_question_text",
  },
  {
    text: "Bản chất của nền dân chủ xã hội chủ nghĩa được thể hiện trên mấy lĩnh vực?",
    options: ["4", "3", "1", "2"],
    answer: "3",
    id: "question_1056323_question_text",
  },
  {
    text: "Nhà nước xã hội chủ nghĩa là nhà nước mang bản chất của giai cấp nào?",
    options: [
      "Nông dân.",
      "Tư sản và giai cấp tiểu tư sản.",
      "Công nhân và đội ngũ trí thức.",
      "Công nhân.",
    ],
    answer: "Công nhân.",
    id: "question_1056325_question_text",
  },
  {
    text: "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam có mấy đặc điểm?",
    options: ["4", "6", "7", "5"],
    answer: "6",
    id: "question_1056333_question_text",
  },
  {
    text: "Dựa vào tính chất tác động của quyền lực, nhà nước xã hội chủ nghĩa có những chức năng nào?",
    options: [
      "Chức năng giai cấp và chức năng xã hội.",
      "Chức năng đối nội và chức năng đối ngoại.",
      "Chức năng văn hóa và chức năng xã hội.",
      "Chức năng kinh tế, chức năng chính trị.",
    ],
    answer: "Chức năng giai cấp và chức năng xã hội.",
    id: "question_1056331_question_text",
  },
  {
    text: "Bản chất tư tưởng – văn hóa – xã hội của nền dân chủ xã hội chủ nghĩa thể hiện như thế nào?",
    options: [
      "Lấy tư tưởng truyền thống dân tộc làm chủ đạo với mọi hình thái ý thức xã hội khác.",
      "Lấy hệ tư tưởng Mác – Lênin làm chủ đạo với mọi hình thái ý thức xã hội khác.",
      "Lấy hệ tư tưởng tư sản làm chủ đạo với mọi hình thái ý thức xã hội khác.",
      "Lấy tư tưởng Hồ Chí Minh làm chủ đạo với mọi hình thái ý thức xã hội khác.",
    ],
    answer:
      "Lấy hệ tư tưởng Mác – Lênin làm chủ đạo với mọi hình thái ý thức xã hội khác.",
    id: "question_1056329_question_text",
  },
  {
    text: "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa thể hiện như thế nào?",
    options: [
      "Là thực hiện quyền lực của giai cấp nông dân.",
      "Là thực hiện quyền lực của giai cấp công nhân và nhân dân lao động đối với toàn xã hội.",
      "Là thực hiện quyền lực của giai cấp công nhân và tầng lớp trí thức.",
      "Sự lãnh đạo chính trị của giai cấp công nhân thông qua Đảng Cộng sản nhằm thực hiện quyền lực và lợi ích cho nhân dân lao động.",
    ],
    answer:
      "Sự lãnh đạo chính trị của giai cấp công nhân thông qua Đảng Cộng sản nhằm thực hiện quyền lực và lợi ích cho nhân dân lao động.",
    id: "question_1056328_question_text",
  },
  {
    text: "Nền dân chủ xã hội chủ nghĩa được “phôi thai” từ khi nào?",
    options: [
      "Từ sau cách mạng Tháng Mười Nga 1917.",
      "Từ năm 1848 – khi chủ nghĩa khoa học ra đời.",
      "Từ thực tiễn đấu tranh giai cấp ở Pháp và Công xã Pari 1871.",
      "Từ sau chiến tranh thế giới thứ II.",
    ],
    answer: "Từ thực tiễn đấu tranh giai cấp ở Pháp và Công xã Pari 1871.",
    id: "question_1056327_question_text",
  },
  {
    text: "Dựa vào phạm vi tác động của quyền lực, nhà nước xã hội chủ nghĩa có những chức năng nào?",
    options: [
      "Chức năng đối nội và chức năng đối ngoại.",
      "Chức năng giai cấp và chức năng xã hội.",
      "Chức năng văn hóa và chức năng xã hội.",
      "Chức năng kinh tế, chức năng chính trị.",
    ],
    answer: "Chức năng đối nội và chức năng đối ngoại.",
    id: "question_1056330_question_text",
  },
  {
    text: "So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm khác biệt cơ bản nào?",
    options: [
      "Không còn mang tính giai cấp.",
      "Là nền dân chủ phi lịch sử.",
      "Là nền dân chủ thuần tuý.",
      "Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động.",
    ],
    answer:
      "Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động.",
    id: "question_1056326_question_text",
  },
  {
    text: "Luận điểm “Quyền lực nhà nước là thống nhất, có sự phân công rõ ràng, kiểm soát cơ quan lập pháp, hành pháp và tư pháp” được Đảng ta nêu ra tại Đại hội lần thứ mấy?",
    options: ["Đại hội IX.", "Đại hội XI.", "Đại hội XII.", "Đại hội X."],
    answer: "Đại hội XII.",
    id: "question_1056337_question_text",
  },
  {
    text: "Theo quan điểm của Lênin, khái niệm “nửa nhà nước” dùng để chỉ hình thức nhà nước nào?",
    options: [
      "Nhà nước phong kiến.",
      "Nhà nước tư bản chủ nghĩa.",
      "Nhà nước chiếm hữu nô lệ.",
      "Nhà nước xã hội chủ nghĩa.",
    ],
    answer: "Nhà nước xã hội chủ nghĩa.",
    id: "question_1056335_question_text",
  },
  {
    text: "Luận điểm “Chế độ dân chủ là một hình thức nhà nước… cho nên cũng như mọi nhà nước, chế độ dân chủ là việc thi hành có tổ chức, có hệ thống sự cưỡng bức đối với người ta” là của ai ?",
    options: ["Ph. Ăngghen.", "C.Mác.", "Hồ Chí Minh.", "V.I. Lênin."],
    answer: "V.I. Lênin.",
    id: "question_1056338_question_text",
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
