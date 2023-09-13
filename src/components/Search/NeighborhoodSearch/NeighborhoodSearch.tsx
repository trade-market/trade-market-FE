import * as S from "./NeighborhoodSearchStyles";
import BigTitle from '@components/common/BigTitle';

interface rankingInterface {
  [key: string]: number | any;
}

const NeighborhoodSearch = () => {
  //Todo : API 요청을 통해 많이 찾는 거래 배열(임시 : arr) 가져온다. (useState, useEffect)
  const arr = ['밥솥', '밥솥', '밥솥', '밥솥', '밥솥', '밥솥', '밥솥', '마우스', '마우스', '마우스', '마우스', '마우스', '마우스', '보조배터리', '에어프라이어', '갤럭시 워치 5', '보조배터리', '에어프라이어', '갤럭시 워치 5', '시디즈 의자', '제습기', '컨버스', '그라인더', '텀블러', '보조배터리', '에어프라이어', '갤럭시 워치 5', '시디즈 의자', '제습기', '컨버스', '그라인더', '텀블러'];
  const rankingArr: rankingInterface = arr.reduce((acc: any = {}, cur: string) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sorted = Object.entries(rankingArr).sort(([_, b1]: number[], [__, b2]: number[]) => b2 - b1);
  const popularArr = sorted.map(v => v[0]);
  
  return (
    <S.Wrapper>
      <BigTitle>이웃들이 많이 찾는 거래</BigTitle>
      <div className="container">
        {popularArr.map((rank, i) => {
          return (
              <div key={i} className="item">
                <div className="no">{i+1}</div>
                <div className="content">{rank}</div>
              </div>
          )
        })}
      </div>
    </S.Wrapper>
  );
};

export default NeighborhoodSearch;