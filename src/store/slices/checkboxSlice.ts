import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckboxState {
  checkboxVisible: boolean;
  checkedItems: string[];
}

const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: {
    checkboxVisible: false,
    checkedItems: [],
  } as CheckboxState,
  reducers: {
    // 체크 박스 보이기/숨기기
    toggleCheckboxVisible(state) {
      state.checkboxVisible = !state.checkboxVisible;
    },
    // 체크 박스 숨기기
    inVisibleCheckbox(state) {
      state.checkboxVisible = false;
    },
    // 체크 박스 체크
    checkItem(state, action: PayloadAction<string>) {
      state.checkedItems.push(action.payload);
    },
    // 체크 박스 해제
    uncheckItem(state, action: PayloadAction<string>) {
      state.checkedItems = state.checkedItems.filter(
        (id) => id !== action.payload
      );
    },
    // 체크 박스 전체 체크
    checkAll(state, action: PayloadAction<string[]>) {
      state.checkedItems = [...action.payload];
    },
    // 체크 박스 전체 해제
    resetCheckedItems(state) {
      state.checkedItems = [];
    },
  },
});

export const {
  toggleCheckboxVisible,
  inVisibleCheckbox,
  checkItem,
  uncheckItem,
  checkAll,
  resetCheckedItems,
} = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
