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
  top: -68px;
  cursor: pointer;
`;

function SetCurrentLocationBtn() {
  return <Button />;
}

export default SetCurrentLocationBtn;
