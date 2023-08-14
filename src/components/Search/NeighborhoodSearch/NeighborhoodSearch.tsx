import * as S from "./NeighborhoodSearchStyles";
import BigTitle from '@components/common/BigTitle';

interface INeighborhoodSearchProps {
  acc: {},
  cur: string;
}

const NeighborhoodSearch = () => {
  //Todo : API 요청을 통해 많이 찾는 거래 배열 가져온다. (useState, useEffect)
  const arr = ['밥솥', '밥솥', '밥솥', '밥솥', '밥솥', '밥솥', '밥솥', '마우스','마우스','마우스','마우스', '보조배터리', '에어프라이어', '갤럭시 워치 5', '보조배터리', '에어프라이어', '갤럭시 워치 5','시디즈 의자', '제습기', '컨버스', '그라인더', '텀블러', '보조배터리', '에어프라이어', '갤럭시 워치 5', '시디즈 의자', '제습기', '컨버스', '그라인더', '텀블러'];
  const checkRanking = arr.reduce((acc, cur): INeighborhoodSearchProps => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sorted = Object.entries(checkRanking).sort(([a1, b1], [a1, b2]) => b2 - b1);
  const popularArr = sorted.map(v => v[0]);
  
  return (
    <S.Wrapper>
      <BigTitle>이웃들이 많이 찾는 거래</BigTitle>
      <div className="container">
        <div className="item">
          <div className="no">1</div>
          <div className="content">밥솥</div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default NeighborhoodSearch;


        // {popularArr.map((content, i) => {
        //   <div className="item" key={i}>
        //     <div className="no">{i}</div>
        //     <div className="content">{content}</div>
        //   </div>
        // })}