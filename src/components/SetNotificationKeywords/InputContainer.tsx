import CommonModal from '@components/common/CommonModal';
import useModal from '@hooks/useModal';
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  padding: 12px 0;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const AddKeywordButton = styled.button`
  position: absolute;
  right: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.Mainblue};
  font-size: ${({ theme }) => theme.font.size.base};
`;

interface IInputContainerProps {
  onAdd: (keyword: string) => void;
  currentKeywordCount: number;
}

function InputContainer({ onAdd, currentKeywordCount }: IInputContainerProps) {
  const { isOpen, open, close } = useModal();
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('currentKeywordCount', currentKeywordCount);
    if (currentKeywordCount >= 10) {
      open();
      return;
    }

    setKeyword('');
    onAdd(keyword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="키워드를 입력해주세요. (예: 아이패드)"
          value={keyword}
          onChange={handleInputChange}
        />
        <AddKeywordButton>추가</AddKeywordButton>
      </Form>
      <CommonModal
        isOpen={isOpen}
        closeAction={close}
        title="최대 10개까지만 추가할 수 있습니다."
      />
    </>
  );
}

export default InputContainer;
