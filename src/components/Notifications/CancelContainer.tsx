import styled from 'styled-components';

const CancelButtonContainer = styled.div`
  padding: 13px 21px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    font-weight: 600;
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

interface ICancelContainerProps {
  isSelectAll: boolean;
  handleSelectAllClick: () => void;
}

function CancelContainer({
  isSelectAll,
  handleSelectAllClick,
}: ICancelContainerProps) {
  return (
    <CancelButtonContainer>
      <button onClick={handleSelectAllClick}>
        {isSelectAll ? '전체 선택 취소' : '전체 선택'}
      </button>
    </CancelButtonContainer>
  );
}

export default CancelContainer;
