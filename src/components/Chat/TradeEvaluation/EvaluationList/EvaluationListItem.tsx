import EvaluationOption from './EvaluationOption';
import * as E from './EvaluationListStyles';

interface IEvaluationListItemProps {
  mannerType: string;
  selectMannerHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  select: Set<string>;
}

const EvaluationListItem = ({mannerType, selectMannerHandler, select}: IEvaluationListItemProps) => {
  return (
    <E.ListConTainer>
      {
        [...EvaluationOption[mannerType][2]].map((list, idx) => (
          <E.ListBox key={idx} onClick={selectMannerHandler}
            className={select.has(list) ? 'active' : ''}
            >{list}</E.ListBox>
        ))
      }
    </E.ListConTainer>
  );
};

export default EvaluationListItem;

