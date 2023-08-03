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
    };
    font: {
      family: {
        NotoSansKR_Thin: string;
        NotoSansKR_Light: string;
        NotoSansKR_Regular: string;
        NotoSansKR_Medium: string;
        NotoSansKR_Bold: string;
        NotoSansKR_Black: string;
        Pretendard_Thin: string;
        Pretendard_ExtraLight: string;
        Pretendard_Light: string;
        Pretendard_Regular: string;
        Pretendard_Medium: string;
        Pretendard_SemiBold: string;
        Pretendard_ExtraBold: string;
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
