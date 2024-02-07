import { useDispatch, useSelector } from 'react-redux';
import {
  inVisibleCheckbox,
  resetCheckedItems,
} from '@store/slices/checkboxSlice';
import { RootState } from '@store/types';

// 체크박스 "상태"를 관리하는 커스텀 훅
// slice에서 작성 된 액션은 필요한 컴포넌트에서 직접 호출해서 사용
const useCheckboxState = () => {
  const dispatch = useDispatch();
  const { checkboxVisible, checkedItems } = useSelector(
    (state: RootState) => state.checkbox
  );

  // 체크박스 및 체크 된 목록 초기화
  const resetCheckboxState = () => {
    dispatch(resetCheckedItems());
    if (checkboxVisible) {
      dispatch(inVisibleCheckbox());
    }
  };

  return {
    checkboxVisible,
    checkedItems,
    resetCheckboxState,
  };
};

export default useCheckboxState;
