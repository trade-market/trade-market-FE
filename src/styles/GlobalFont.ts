import { createGlobalStyle } from "styled-components";
import NotoSansKR_Thin from '../Assets/Fonts/NotoSansKR_Thin.otf';
import NotoSansKR_Light from '../Assets/Fonts/NotoSansKR_Light.otf';
import NotoSansKR_Regular from '../Assets/Fonts/NotoSansKR_Regular.otf';
import NotoSansKR_Medium from '../Assets/Fonts/NotoSansKR_Medium.otf';
import NotoSansKR_Bold from '../Assets/Fonts/NotoSansKR_Bold.otf';
import NotoSansKR_Black from '../Assets/Fonts/NotoSansKR_Black.otf';
import Pretendard_Thin from "../Assets/Fonts/Pretendard-Thin.otf";
import Pretendard_ExtraLight from "../Assets/Fonts/Pretendard_ExtraLight.otf";
import Pretendard_Light from "../Assets/Fonts/Pretendard_Light.otf";
import Pretendard_Regular from "../Assets/Fonts/Pretendard_Regular.otf";
import Pretendard_Medium from "../Assets/Fonts/Pretendard_Medium.otf";
import Pretendard_SemiBold from "../Assets/Fonts/Pretendard_SemiBold.otf";
import Pretendard_ExtraBold from "../Assets/Fonts/Pretendard_ExtraBold.otf";

export default createGlobalStyle`
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKR_Thin}) format('otf');
    font-weight: 100;
  }
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKR_Light}) format('otf');
    font-weight: 300;
  }
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKR_Regular}) format('otf');
    font-weight: 400;
  }
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKR_Medium}) format('otf');
    font-weight: 500;
  }
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKR_Bold}) format('otf');
    font-weight: 700;
  }
  @font-face {
    font-family: "NotoSansKR";
    src: local("NotoSansKR"), url(${NotoSansKR_Black}) format('otf');
    font-weight: 900;
  }
  @font-face {
    font-family: "Pretendard_Thin";
    src: url("Pretendard"), url(${Pretendard_Thin}) format('otf');
    font-weight: 100;
  }
  @font-face {
    font-family: "Pretendard_ExtraLight";
    src: url("Pretendard"), url(${Pretendard_ExtraLight}) format('otf');
    font-weight: 200;
  }
  @font-face {
    font-family: "Pretendard_Light";
    src: url("Pretendard"), url(${Pretendard_Light}) format('otf');
    font-weight: 300;
  }
  @font-face {
    font-family: "Pretendard_Regular";
    src: url("Pretendard"), url(${Pretendard_Regular}) format('otf');
    font-weight: 400;
  }
  @font-face {
    font-family: "Pretendard_Medium";
    src: url("Pretendard"), url(${Pretendard_Medium}) format('otf');
    font-weight: 500;
  }
  @font-face {
    font-family: "Pretendard_SemiBold";
    src: url("Pretendard"), url(${Pretendard_SemiBold}) format('otf');
    font-weight: 600;
  }
  @font-face {
    font-family: "Pretendard_ExtraBold";
    src: url("Pretendard"), url(${Pretendard_ExtraBold}) format('otf');
    font-weight: 700;
  }
`;