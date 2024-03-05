import styled from 'styled-components';

interface ICheckBoxProps {
  id: string;
  checkHandler: (id: string, isChecked: boolean) => void;
  checkItems: Set<unknown>;
}

const CheckBox = ({ id, checkHandler, checkItems }: ICheckBoxProps) => {
  const checkItemHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    checkHandler(id, checked);
  };

  return (
    <Input
      id={id}
      type="checkbox"
      checked={checkItems.has(id) ? true : false}
      onChange={(e) => checkItemHandler(e)}
    />
  );
};

export default CheckBox;

const Input = styled.input`
  margin-top: 20px;
`;
