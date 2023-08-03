import { css } from "styled-components";

const flex = {
    // flexBox의 기본값으로 direction = 'row' , align = 'center', justify = 'center' 설정되어 있다.
    flexBox: (direction = 'row', align = 'center', justify = 'center') => `
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
    `
};

const fontStyle = {
  body_20_semibold: css`
        font-family: "Pretendard-SemiBold";
        font-size: 2rem;
    `,
  body_20_medium: css`
        font-family: "Pretendard-Medium";
        font-size: 2rem;
    `,
  body_20_regular: css`
        font-family: "Pretendard-Regular";
        font-size: 2rem;
    `,
  body_16_light: css`
        font-family: "Pretendard-Light";
        font-size: 1.6rem;
    `,
  body_10_Extralight: css`
        font-family: "Pretendard-ExtraLight";
        font-size: 1rem;
    `,
};

const color = {
  main : '#2156F2'
};

export const theme = {
  flex,
  fontStyle,
  color
}

export type theme = typeof theme;