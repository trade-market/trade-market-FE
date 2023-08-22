import styled, {css} from 'styled-components';
import icon_ellipse from '@Assets/icons/WriteComment/Ellipse.svg';

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.Mainblue};
  margin-top: 50px;

  & > .count {
    position: absolute;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -320%);
    font-size: 10px;
    font-weight: 500;

    :nth-child(2) {
      color : ${({ theme }) => theme.color.lightGray};
    }
  }
`;

const Dot = styled.div<{ position: string }>`
  ${props => {
  if (props.position === "left") {
    return css`
      position: absolute;
      display: flex;
      transform : translate(200%, -40%);
    `
  } else {
      return css`
        position: absolute;
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
        transform : translate(-5%, -40%);
      `
    }
  }}
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
  background-color: ${({ theme }) => theme.color.white};
  & > img {
    width: 35px;
    height: 35px;
  }
`;

interface IProgressbarProps {
  progressNumber: string;
  progressTotal: string;
  progressIcon: string;
}

function Progressbar({ progressNumber, progressTotal, progressIcon } :IProgressbarProps) {
  return (
    <>
      <Line>
        <Dot position='left'>
          <img src={icon_ellipse} />
        </Dot>
        <div className="count">
          <span>{progressNumber} / </span>
          <span>{progressTotal}</span>
        </div>
        <Icon>
          <img src={progressIcon} alt="progess_icon"/>
        </Icon>
        <Dot position='right'>
          <img src={icon_ellipse} />
        </Dot>
      </Line>
    </>
  );
}

export default Progressbar;
