// import { useState } from "react";
import * as S from "./RecentSearchStyles";
import Close from "@Assets/Icons/Search/Close.svg";
import BigTitle from '@components/common/BigTitle';

//   interface IUser {
//   id: number,
//   text : string
// }

interface IRecentSearshProps {
  keywords: any;
  onClearKeywords: () => void;
  onRemoveKeyword: (id: number) => void;
}

const RecentSearsh = ({keywords, onClearKeywords, onRemoveKeyword }: IRecentSearshProps) => {
  const temp = ['쿠첸 밥솥', '컨버스 운동화', '운동화', '보조배터리', '충전기'];
  console.log(keywords)

  return (
    <S.Container className="recent">
      <div className="menu">
        <BigTitle>최근 검색어</BigTitle>
        <button onClick={onClearKeywords}>전체 삭제</button>
      </div>
        <div className="keywords">
        {temp.length > 0 ?
          temp.map((keword, i) => {
            return (
              <div className="keyword" key={i}>
                {keword}
                <button
                  className="deleteBtn"
                >
                  <img src={Close} />
                </button>
              </div>
            )
          }) :
          <div className="no-keyword">
            최근 검색어가 없습니다.
          </div>
          }
        </div>
    </S.Container>
  );
};

export default RecentSearsh;