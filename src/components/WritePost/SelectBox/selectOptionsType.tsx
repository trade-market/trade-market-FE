type selectOptionsType = {
  [key: string]: string[];
};

const selectOptions: selectOptionsType = {
  'TalentOptions': ['국어', '영어', '제2외국어', '개발/코딩', '디자인', '수학', '미술', '운동', '주식', '미용/뷰티', '취업', '자격증', '음악', '단순인력'],
  'ObjectOptions': ['전자기기', '생활 가전', '가구', '생활/주방', '도서', '의류', '미용/뷰티', '스포츠/레저', '취미', '중고차', '티켓', '식품'],
  'TimeOptions': ['이른 아침(06시 ~ 09시)', '오전(09시 ~ 12시)', '오후(12시 ~ 18시)', '저녁(18시 ~ 00시)', '새벽(00시 ~ 06시)'],
  'AlertOptions' : ['알림 없음', '약속 당시', '5분 전', '15분 전', '30분 전', '1시간 전', '1일 전'],
};

export default selectOptions;