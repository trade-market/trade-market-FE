import styled from 'styled-components';
import exchange_icon from '@Assets/Icons/WritePost/exchange_icon.svg'

interface ICategoryProps {
  provide: string;
  exchange: string;
}

const Category = ({provide, exchange} : ICategoryProps) => {
  return (
    <Container>
      <span className='provide'>{provide}</span>
        <img src={exchange_icon} /> 
      <span className='exchange'>{exchange}</span>
    </Container> 
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  font-size: 10px;
  font-weight: 500;
  color : ${({ theme }) => theme.color.activeBlue};
  /* align-items: center; */
  .provide {
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.color.activeBlue};
    margin-right: 5px;
    padding: 6px 10px;
  }
  .exchange {
    color : ${({ theme }) => theme.color.activeBlue};
    border: none;
    border-radius: 12px;
    background-color: #2156F214;
    margin-left: 5px;
    padding: 6px 10px;
  }
`;