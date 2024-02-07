type EvaluationOptionTyper = {
  [key: string]: (string | string[])[];
};

const EvaluationOption: EvaluationOptionTyper = {
  good: [
    '매너 점수 주기',
    '좋았나요?',
    [
      '응답이 빨라요',
      '친절하고 매너가 좋아요',
      '시간 약속을 잘 지켜요',
      '제가 있는 곳까지 와서 거래 했어요',
      '제품 상태가 말한 것과 같아요',
    ],
  ],
  bad: [
    '비매너 점수 주기',
    '아쉬웠나요?',
    [
      '응답이 느려요',
      '불친절해요',
      '약속 장소에 늦게 나타났어요',
      '제품 상태가 말한 것과 달라요',
    ],
  ],
};

export default EvaluationOption;
