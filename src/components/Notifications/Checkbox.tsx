import React from 'react';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${({ theme, checked }) =>
    checked ? theme.color.Mainblue : theme.color.whiteGray};
  border-radius: 2px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div``;

interface ICheckboxProps {
  checked: boolean;
  onChange: () => void;
}

function Checkbox({ checked, onChange }: ICheckboxProps) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} readOnly />
      <StyledCheckbox checked={checked} onClick={onChange} />
    </CheckboxContainer>
  );
}

export default Checkbox;
