import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface chatStorageType {
  userId: string; message: any; time: Date | null;
}

interface ChatState {
  chatStorage: chatStorageType[];
  planTime: { date: Date | null; ap: string; hour: number; minute:number };
  alarm: string;
}

const initialState: ChatState = {
  chatStorage: [],
  planTime: { date: null, ap: '', hour: 0, minute: 0 },
  alarm: '알림 없음',
} 

// chat
export const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatStorage: (state, action: PayloadAction<chatStorageType>) => {
      state.chatStorage.push(action.payload);
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
