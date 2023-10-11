import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  ${({ theme }) => {
    return css`
      body {
        background: #cbcbcb;
        font-family: ${theme.font.family.Pretendard};
        font-size: ${theme.font.size.base};
        color: ${theme.color.black};
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      button {
        font-family: ${theme.font.family.Pretendard};
        cursor: pointer;
        border: none;
        background: none;
        color: ${theme.color.black};
      }
      input {
        font-family: ${theme.font.family.Pretendard};
      }
    `;
  }}


`;

export default GlobalStyle;
