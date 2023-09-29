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
  min-width: 25px;
  width: fit-content;
  justify-content: center;
`;