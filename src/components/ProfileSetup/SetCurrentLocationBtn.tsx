import styled from 'styled-components';
import currentLocationIcon from '@Assets/icons/current_location_icon.svg';

const Button = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${currentLocationIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  background-color: none;
  position: absolute;
  right: 20px;
  bottom: 200px;
  cursor: pointer;
  z-index: 99;
`;

interface ISetCurrentLocationBtnProps {
  onClick: () => void;
}

function SetCurrentLocationBtn({ onClick }: ISetCurrentLocationBtnProps) {
  return <Button onClick={onClick} />;
}

export default SetCurrentLocationBtn;
