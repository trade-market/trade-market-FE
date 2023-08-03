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

    // device: {
    //   pc: string;
    //   tab: string;
    //   mobile: string;
    //   mobileS: string;
    // };
  }
}
