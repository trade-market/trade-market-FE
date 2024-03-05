import styled from 'styled-components';
import x_icon from '@Assets/Icons/X_button.svg';

const Container = styled.li`
  height: 32px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  list-style-type: none;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  background: url(${x_icon}) no-repeat center;
  width: 16px;
  height: 16px;
`;

interface IKeywordItemProps {
  keyword: string;
  id: string;
  onRemove: (id: string) => void;
}

function KeywordItem({ keyword, id, onRemove }: IKeywordItemProps) {
  return (
    <Container onClick={() => onRemove(id)}>
      {keyword}
      <DeleteBtn />
    </Container>
  );
}

export default KeywordItem;
