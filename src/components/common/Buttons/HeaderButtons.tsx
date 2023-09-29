import styled from 'styled-components';

interface IHeaderButtonsProps {
  children?: React.ReactNode;
}

const HeaderButtons = ({children} : IHeaderButtonsProps) => {
  return (
    <Buttons>
      {children}
    </Buttons>
  );
};

export default HeaderButtons;

const Buttons = styled.div`
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
`;