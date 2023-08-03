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
        background: gray;
        font-family: ${theme.font.family.Pretendard};
      }
    `;
  }}

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
