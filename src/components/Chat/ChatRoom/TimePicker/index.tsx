import styled from 'styled-components';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import { getYear, getMonth } from "date-fns";
import 'react-datepicker/dist/react-datepicker.css';

interface ITimePickerProps {
  selectdeadline: Date | null;
  onChange: (date: Date | null, event: React.SyntheticEvent<any, Event> | undefined) => void;
}

const TimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy aa h:mm"
        showTimeInput
        showTimeSelect
        showTimeSelectOnly
    />
    </>
  );
};

export default TimePicker;