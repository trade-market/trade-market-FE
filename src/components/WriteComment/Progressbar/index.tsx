import * as P from './ProgressbarStyles';

import icon_pencil from '@Assets/icons/WriteComment/Pencil.svg';
import icon_ellipse from '@Assets/icons/WriteComment/Ellipse.svg';

interface ProgressbarProps {
  count: number;
  endCount: number;
}

function Progressbar({ count, endCount }: ProgressbarProps) {
  return (
    <>
      <P.Line count={count} endcount={endCount}>
        <P.Icon>
          <img src={icon_pencil} />
        </P.Icon>
        <div className="count">
          {count === 1 ? (
            '1'
          ) : (
            <>
              {count} <span>/ {endCount}</span>
            </>
          )}
        </div>
        <P.IconStart count={count} endcount={endCount}>
          <img src={icon_ellipse} alt="Start Icon" />
        </P.IconStart>
        <P.IconEnd count={count} endcount={endCount}>
          <img src={icon_ellipse} alt="End Icon" />
        </P.IconEnd>
      </P.Line>
    </>
  );
}

export default Progressbar;
