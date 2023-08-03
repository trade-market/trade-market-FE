import { createGlobalStyle } from 'styled-components';
import NotoSansKR_Thin from '../Assets/Fonts/NotoSansKR_Thin.otf';
import NotoSansKR_Light from '../Assets/Fonts/NotoSansKR_Light.otf';
import NotoSansKR_Regular from '../Assets/Fonts/NotoSansKR_Regular.otf';
import NotoSansKR_Medium from '../Assets/Fonts/NotoSansKR_Medium.otf';
import NotoSansKR_Bold from '../Assets/Fonts/NotoSansKR_Bold.otf';
import NotoSansKR_Black from '../Assets/Fonts/NotoSansKR_Black.otf';
import Pretendard_Thin from '../Assets/Fonts/Pretendard_Thin.otf';
import Pretendard_ExtraLight from '../Assets/Fonts/Pretendard_ExtraLight.otf';
import Pretendard_Light from '../Assets/Fonts/Pretendard_Light.otf';
import Pretendard_Regular from '../Assets/Fonts/Pretendard_Regular.otf';
import Pretendard_Medium from '../Assets/Fonts/Pretendard_Medium.otf';
import Pretendard_SemiBold from '../Assets/Fonts/Pretendard_SemiBold.otf';
import Pretendard_ExtraBold from '../Assets/Fonts/Pretendard_ExtraBold.otf';

export default createGlobalStyle`
   @font-face {
    font-family: "Noto Sans KR";
    src: local("Noto Sans KR Thin"), url(${NotoSansKR_Thin}) format('opentype');
    font-weight: 100;
  }
  @font-face {
    font-family: "Noto Sans KR";
    src: local("Noto Sans KR Light"), url(${NotoSansKR_Light}) format('opentype');
    font-weight: 300;
  }
  @font-face {
    font-family: "Noto Sans KR";
    src: local("NotoSansKR_Regular"), url(${NotoSansKR_Regular}) format('opentype');
    font-weight: 400;
  }
  @font-face {
    font-family: "Noto Sans KR";
    src: local("NotoSansKR_Medium"), url(${NotoSansKR_Medium}) format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: "Noto Sans KR";
    src: local("NotoSansKR_Bold"), url(${NotoSansKR_Bold}) format('opentype');
    font-weight: 700;
  }
  @font-face {
    font-family: "Noto Sans KR";
    src: local("NotoSansKR_Black"), url(${NotoSansKR_Black}) format('opentype');
    font-weight: 900;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("Pretendard_Thin"), url(${Pretendard_Thin}) format('opentype');
    font-weight: 100;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("Pretendard_ExtraLight"), url(${Pretendard_ExtraLight}) format('opentype');
    font-weight: 200;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("Pretendard_Light"), url(${Pretendard_Light}) format('opentype');
    font-weight: 300;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("Pretendard_Regular"), url(${Pretendard_Regular}) format('opentype');
    font-weight: 400;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("Pretendard_Medium"), url(${Pretendard_Medium}) format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("Pretendard_SemiBold"), url(${Pretendard_SemiBold}) format('opentype');
    font-weight: 600;
  }
  @font-face {
    font-family: "Pretendard";
    src: url("Pretendard_ExtraBold"), url(${Pretendard_ExtraBold}) format('opentype');
    font-weight: 700;
  }
`;
