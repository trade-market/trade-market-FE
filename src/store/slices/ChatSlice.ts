import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  chatStorage: string[];
  planTime: Date | null;
  alarm: string;
}

const initialState: ChatState = {
  chatStorage: [],
  planTime: null,
  alarm: '',
}

// chat
export const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatStorage: (state, action: PayloadAction<string[]>) => {
      state.chatStorage = action.payload;
    },
    setPlanTime: (state, action: PayloadAction<Date | null>) => {
      state.planTime = action.payload;
    },
    setAlarm: (state, action: PayloadAction<string>) => {
      state.alarm = action.payload;
    },
  }
});

export const { setChatStorage, setPlanTime, setAlarm} =
  ChatSlice.actions;

export default ChatSlice.reducer;
