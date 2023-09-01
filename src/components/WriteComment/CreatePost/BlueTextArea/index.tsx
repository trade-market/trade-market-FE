import styled from 'styled-components';

interface IBlueTextAreaProps {
  placeholder: string;
  value: string | string[];
  maxLength?: number;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  maxHeight?: string;
}

const BlueTextArea = ({placeholder, value='', maxLength=0, maxHeight='268px', handleChange } : IBlueTextAreaProps) => {
  //* 글자수 제한
  const onBlur = (value: string | string[]) => value.length > maxLength ? value.slice(0, maxLength) : value;
  
  return (
    <BlueContainer
      placeholder={placeholder}
      defaultValue={onBlur(value)}
      onChange={handleChange}
      $maxHeight={maxHeight}
      />
  );
};

export default BlueTextArea;

const BlueContainer = styled.textarea<{ $maxHeight : string }>`
  display: flex;
  justify-content: center;
  background-color: #2156F214;
  max-width: 378px;
  width: 100%;
  height: ${({ $maxHeight }) => $maxHeight };
  border: none;
  border-radius: 8px;
  padding: ${({ $maxHeight }) => $maxHeight === '268px' ? '30px 20px' : '23px 20px'};
  font-size: ${({ theme }) => theme.font.size.small};
  word-spacing : -3px;
  resize: none;
  margin-top: 12px;
  overflow-y: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
    word-spacing : -3px;
  }
`;