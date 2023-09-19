import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    margin: {
      small: string;
      base: string;
      medium: string;
      large: string;
      xLarge: string;
    };
    padding: {
      small: string;
      base: string;
      large: string;
      xLarge: string;
    };
    color: {
      white: string;
      bgColor: string;
      black: string;
      Mainblue: string;
      gray: string;
      lightGray: string;
      whiteGray: string;
      whiteLightGray: string;
      activeBlue: string;
      disableBtn: string;
      inputGray: string;
      orange: string;
      lightBlue: string;
    };
    font: {
      family: {
        NotoSansKR: string;
        Pretendard: string;
      };
      size: {
        xSmall: string;
        small: string;
        base: string;
        medium: string;
        large: string;
      };
    };

    // device: {
    //   pc: string;
    //   tab: string;
    //   mobile: string;
    //   mobileS: string;
    // };
  }
}
