import * as P from './ProgressbarStyles';
import icon_ellipse from '@Assets/icons/WriteComment/Ellipse.svg';

interface IProgressbarProps {
  number: number;
  total: number;
  icon: string;
}

function Progressbar({ number, total, icon }: IProgressbarProps) {
  return (
    <P.Wrapper>
      <P.Line $number={number} $total={total}>
        <P.Icon>
          <img src={icon} />
        </P.Icon>
        <div className="count">
          {number === 1 ? (
            '1'
          ) : (
            <>
              {number} <span>/ {total}</span>
            </>
          )}
        </div>
        <P.DotStart $number={number} $total={total}>
          <img src={icon_ellipse} alt="Start Icon" />
        </P.DotStart>
        <P.DotEnd $number={number} $total={total}>
          <img src={icon_ellipse} alt="End Icon" />
        </P.DotEnd>
      </P.Line>
    </P.Wrapper>
  );
}

export default Progressbar;
