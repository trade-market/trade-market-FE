import { useState } from 'react';

interface ICheckBoxProps {
  id: string;
  checkHandler: ((id: string, isChecked: boolean) => void);
}

const CheckBox = ({id, checkHandler}: ICheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);
    
  const checkItemHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setIsChecked((prev) => !prev);
    checkHandler(id, checked);
  };

  return (
    <>
      <input
      id={id}
      type='checkbox'
      checked={isChecked}
      onChange={(e) =>checkItemHandler(e)}
        />
    </>
  );
};

export default CheckBox;