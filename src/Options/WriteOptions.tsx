import ExchangeOptions from './ExchangeOptions';

const WriteOptions = [
  ...ExchangeOptions,
  {
    sort_type: 'abletime',
    title: '거래 가능 시간',
    contents: [
      '이른 아침(06시 ~ 09시)',
      '오전(09시 ~ 12시)',
      '오후(12시 ~ 18시)',
      '저녁(18시 ~ 00시)',
      '새벽(00시 ~ 06시)',
    ],
  },
  {
    sort_type: 'alert',
    title: '알림',
    contents: [
      '알림 없음',
      '약속 당시',
      '5분 전',
      '15분 전',
      '30분 전',
      '1시간 전',
      '1일 전',
    ],
  },
];

export default WriteOptions;
