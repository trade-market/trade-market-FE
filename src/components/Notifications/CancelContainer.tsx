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
  handleSelectAllClick: () => void;
}

function CancelContainer({ handleSelectAllClick }: ICancelContainerProps) {
  return (
    <CancelButtonContainer>
      <button onClick={handleSelectAllClick}>전체 삭제</button>
    </CancelButtonContainer>
  );
}

export default CancelContainer;
