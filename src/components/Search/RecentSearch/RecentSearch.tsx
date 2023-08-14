// import { useState } from "react";
import * as S from "./RecentSearchStyles";
import Close from "@Assets/Icons/Search/Close.svg";
import BigTitle from '@components/common/BigTitle';

const RecentSearsh = () => {
  const arr = ['쿠첸 밥솥', '컨버스 운동화', '운동화', '보조배터리', '충전기'];

  return (
    <S.Container className="recent">
        <BigTitle>최근 검색어</BigTitle>
        <div className="keywords">
          {arr.map((keword, i) => {
            return (
              <div className="keyword" key={i}>{keword}
                <button className="deleteBtn">
                  <img src={Close} />
                </button>
              </div>
            )
          })}
        </div>
    </S.Container>
  );
};

export default RecentSearsh;