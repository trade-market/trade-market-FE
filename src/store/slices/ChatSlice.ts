import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES } from 'react';

interface ChatState {
  chatStorage: string[];
  planTime: { date: Date | null; ap: string; hour: number; minute:number };
  alarm: string;
}

const initialState: ChatState = {
  chatStorage: [],
  planTime: { date: null, ap: '', hour: 0, minute: 0 },
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
    setPlanDate : (state, action: PayloadAction<Date | null>) => {
      state.planTime.date = action.payload;
    },
    setPlanAP : (state, action: PayloadAction<string>) => {
      state.planTime.ap = action.payload;
    },
    setPlanHour : (state, action: PayloadAction<number>) => {
      state.planTime.hour = action.payload;
    },
    setPlanMinute : (state, action: PayloadAction<number>) => {
      state.planTime.minute = action.payload;
    },
    setAlarm: (state, action: PayloadAction<string>) => {
      state.alarm = action.payload;
    },
  }
});

export const { setChatStorage, setPlanDate, setPlanAP, setPlanHour, setPlanMinute, setAlarm} =
  ChatSlice.actions;

export default ChatSlice.reducer;
