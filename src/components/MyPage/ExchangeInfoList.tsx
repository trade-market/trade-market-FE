import styled from 'styled-components';
import ExchangeInfoBox from '@components/MyPage/ExchangeInfoBox';
import ViewAllIcon from '@Assets/Icons/view_all.svg';

const ExchangeInfoListContainer = styled.div`
  display: flex;
  gap: 8px;

  .view-all__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img {
      width: 38px;
      height: 38px;
    }

    span {
      font-size: 10px;
      font-weight: 500;
    }
  }
`;

function ExchangeInfoList() {
  return (
    <ExchangeInfoListContainer>
      <ExchangeInfoBox title="교환 내역" count={5} />
      <ExchangeInfoBox title="물물교환중" count={3} />
      <ExchangeInfoBox title="재능교환중" count={2} />
      <div className="view-all__container">
        <img src={ViewAllIcon} alt="view-all" />
        <span>전체보기</span>
      </div>
    </ExchangeInfoListContainer>
  );
}

export default ExchangeInfoList;
