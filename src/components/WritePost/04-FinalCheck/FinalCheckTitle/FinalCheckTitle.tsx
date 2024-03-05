import { useParams } from 'react-router-dom';
import { HeadTitle } from '../../../../Pages/WritePost/04-FinalCheck/FinalCheckPost/styles';

const FinalCheckTitile = () => {
  const { exchangeType, tradeType } = useParams();
  return (
    <HeadTitle>
      다음 {tradeType === '1:1' ? tradeType : '오퍼'} 게시물을
      업로드하시겠습니까 ?
    </HeadTitle>
  );
};

export default FinalCheckTitile;
