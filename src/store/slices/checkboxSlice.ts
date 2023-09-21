import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckboxState {
  checkboxVisible: boolean;
  checkedItems: string[]; //
}

const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: {
    checkboxVisible: false,
    checkedItems: [],
  } as CheckboxState,
  reducers: {
    toggleCheckboxVisible(state) {
      state.checkboxVisible = !state.checkboxVisible;
    },
    inVisibleCheckbox(state) {
      state.checkboxVisible = false;
    },
    checkItem(state, action: PayloadAction<string>) {
      state.checkedItems.push(action.payload);
    },
    uncheckItem(state, action: PayloadAction<string>) {
      state.checkedItems = state.checkedItems.filter(
        (id) => id !== action.payload
      );
    },
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
  resetCheckedItems,
} = checkBoxSlice.actions;

export default checkBoxSlice.reducer;
