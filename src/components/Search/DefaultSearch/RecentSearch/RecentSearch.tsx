import { useNavigate } from 'react-router-dom';
import * as S from "./RecentSearchStyles";
import BigTitle from '@components/common/BigTitle';
import { keyInterface } from "@Pages/Search/Search";

interface IRecentSearshProps {
  keywords: keyInterface[];
  onClearKeywords: () => void;
  onRemoveKeyword: (id: number) => void;
}

const RecentSearsh = ({ keywords, onClearKeywords, onRemoveKeyword }: IRecentSearshProps) => {
  const navigate = useNavigate();

  return (
    <S.Container className="recent">
      <div className="menu">
        <BigTitle>최근 검색어</BigTitle>
        <button onClick={onClearKeywords}>전체 삭제</button>
      </div>
        <div className="keywords">
        {keywords?.length ?
          keywords?.map((k) => {
            return (
              <div className="keyword" key={k.id} onClick={() => navigate(`?searching=${k.text}&type=object`)}>
                {k.text}
                <S.DeleteBtn
                  className="deleteBtn"
                  onClick={() => onRemoveKeyword(k.id)}
                />
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