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
    bgColor: '#fdfdfd', // 메인 배경색
    Mainblue: '#007af7',
    lightGray: '#797979',
    activeBlue : '#2156F2'
  },
  font: {
    family: {
      NotoSansKR: 'NotoSansKR',
      Pretendard: 'Pretendard',
    },
  },

  // device: {
  //   pc: `@media screen and (max-width: ${size.pc})`,
  //   tab: `@media screen and (max-width: ${size.tab})`,
  //   mobile: `@media screen and (max-width: ${size.mobile})`,
  //   mobileS: `@media screen and (max-width: ${size.mobileS})`,
  // },
};
