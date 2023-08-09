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
      black: string;
      darkGray: string;
      bgColor: string;
      mainBlue: string;
    };
    font: {
      family: {
        NotoSansKR: string;
        Pretendard: string;
      };
      size: {
        small: string;
        base: string;
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
