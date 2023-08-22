import styled from 'styled-components';
import icon_pencil from '@Assets/icons/WriteComment/Pencil.svg';
import icon_ellipse from '@Assets/icons/WriteComment/Ellipse.svg';

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.whiteGray};
  margin-top: 50px;

  & > .count {
    position: absolute;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -320%);
    font-size: 10px;
    font-weight: 500;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  border: 1px solid ${({ theme }) => theme.color.Mainblue};
  background-color: ${({ theme }) => theme.color.white};
  & > img {
    width: 16px;
    height: 16px;
  }
`;

function Progressbar() {
  return (
    <>
      <Line>
        <div className="count">1</div>
        <Icon>
          <img src={icon_pencil} alt="icon_pencil" />
        </Icon>
      </Line>
    </>
  );
}

export default Progressbar;
