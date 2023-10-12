import ExchangeOptions from "./ExchangeOptions";

const FilteringOptions = [
  ...ExchangeOptions,
  {
    sort_type: 'distance',
    title: '거리',
    contents: [
      '1 km',
      '3 km',
      '5 km',
      '10 km',
    ],
  },
  {
    sort_type: 'exchangetype',
    title: '거래 형식',
    contents: ['1:1', '오퍼'],
  },
    {
    sort_type: 'sort',
    title: '최신순',
    contents: ['최신순', '스크랩순'],
  },
];

export default FilteringOptions;