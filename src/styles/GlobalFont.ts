import { createGlobalStyle } from "styled-components";
import NotoSansKR_Thin from '../Assets/Fonts/NotoSansKR_Thin.otf';
import NotoSansKR_Light from '../Assets/Fonts/NotoSansKR_Light.otf';
import NotoSansKR_Regular from '../Assets/Fonts/NotoSansKR_Regular.otf';
import NotoSansKR_Medium from '../Assets/Fonts/NotoSansKR_Medium.otf';
import NotoSansKR_Bold from '../Assets/Fonts/NotoSansKR_Bold.otf';
import NotoSansKR_Black from '../Assets/Fonts/NotoSansKR_Black.otf';
import Pretendard_Thin from "../Assets/Fonts/Pretendard_Thin.woff";
import Pretendard_ExtraLight from "../Assets/Fonts/Pretendard_ExtraLight.woff";
import Pretendard_Light from "../Assets/Fonts/Pretendard_Light.woff";
import Pretendard_Regular from "../Assets/Fonts/Pretendard_Regular.woff";
import Pretendard_Medium from "../Assets/Fonts/Pretendard_Medium.woff";
import Pretendard_SemiBold from "../Assets/Fonts/Pretendard_SemiBold.woff";
import Pretendard_ExtraBold from "../Assets/Fonts/Pretendard_ExtraBold.woff";

export default createGlobalStyle`
  @font-face {
    font-family: "NotoSansKR_Thin";
    src: local("NotoSansKR"), url(${NotoSansKR_Thin}) format('otf');
    font-weight: 100;
  }
  @font-face {
    font-family: "NotoSansKR_Light";
    src: local("NotoSansKR"), url(${NotoSansKR_Light}) format('otf');
    font-weight: 300;
  }
  @font-face {
    font-family: "NotoSansKR_Regular";
    src: local("NotoSansKR"), url(${NotoSansKR_Regular}) format('otf');
    font-weight: 400;
  }
  @font-face {
    font-family: "NotoSansKR_Medium";
    src: local("NotoSansKR"), url(${NotoSansKR_Medium}) format('otf');
    font-weight: 500;
  }
  @font-face {
    font-family: "NotoSansKR_Bold";
    src: local("NotoSansKR"), url(${NotoSansKR_Bold}) format('otf');
    font-weight: 700;
  }
  @font-face {
    font-family: "NotoSansKR_Black";
    src: local("NotoSansKR"), url(${NotoSansKR_Black}) format('otf');
    font-weight: 900;
  }
  @font-face {
    font-family: "Pretendard_Thin";
    src: url("Pretendard"), url(${Pretendard_Thin}) format('woff');
    font-weight: 100;
  }
  @font-face {
    font-family: "Pretendard_ExtraLight";
    src: url("Pretendard"), url(${Pretendard_ExtraLight}) format('woff');
    font-weight: 200;
  }
  @font-face {
    font-family: "Pretendard_Light";
    src: url("Pretendard"), url(${Pretendard_Light}) format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family: "Pretendard_Regular";
    src: url("Pretendard"), url(${Pretendard_Regular}) format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: "Pretendard_Medium";
    src: url("Pretendard"), url(${Pretendard_Medium}) format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: "Pretendard_SemiBold";
    src: url("Pretendard"), url(${Pretendard_SemiBold}) format('woff');
    font-weight: 600;
  }
  @font-face {
    font-family: "Pretendard_ExtraBold";
    src: url("Pretendard"), url(${Pretendard_ExtraBold}) format('woff');
    font-weight: 700;
  }
`;