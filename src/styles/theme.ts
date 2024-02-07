import { DefaultTheme } from 'styled-components/dist/types';

export const size = {
  mobile: '420px',
  mobileS: '350px',
};

export const theme: DefaultTheme = {
  margin: {
    small: '.5rem',
    base: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xLarge: '3rem',
  },
  padding: {
    small: '.5rem',
    base: '1rem',
    large: '2rem',
    xLarge: '3rem',
  },
  color: {
    white: '#fff',
    bgColor: '#FDFDFD', // 메인 배경색
    Mainblue: '#2156F2',
    gray: '#AFAFAF',
    lightGray: '#797979',
    whiteGray: '#E5E7EB',
    whiteLightGray: '#F2F2F2',
    black: '#0B0B0B',
    activeBlue: '#2156F2',
    disableBtn: '#E5E7EB',
    inputGray: '#f9f8fb',
    orange: '#FF5B22',
    lightBlue: '#EBF0FC',
  },
  font: {
    family: {
      Pretendard: 'Pretendard',
    },
    size: {
      xSmall: '10px',
      small: '12px',
      base: '14px',
      medium: '16px',
      large: '18px',
    },
  },

  // device: {
  //   pc: `@media screen and (max-width: ${size.pc})`,
  //   tab: `@media screen and (max-width: ${size.tab})`,
  //   mobile: `@media screen and (max-width: ${size.mobile})`,
  //   mobileS: `@media screen and (max-width: ${size.mobileS})`,
  // },
};
