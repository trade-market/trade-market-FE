import { useState } from 'react';
import * as E from './ExchageMenuStyles';
import { ObjectIcons, TalentIcons } from './ExchageIcons';
import MapIcons from './MapIcons';

const Exchange = () => {
  const [activeNav, setActiveNav] = useState(1);
  const ObjectMenus = ['전자기기', '생활 가전', '가구', '생활/주방', '도서', '의류', '미용/뷰티', '스포츠/레저', '취미', '중고차', '티켓', '식품'];
  const TalentMenus = ['국어', '영어', '제2외국어', '개발/코딩', '디자인', '수학', '미술', '운동', '주식', '미용/뷰티', '취업', '자격증', '음악', '단순 인력'];

  return (
    <E.Wrapper>
      {/* 메뉴 */}
      <E.Memubar>
        <div className={activeNav === 1 ? 'menu active' : 'menu'} onClick={() => setActiveNav(1)}>
          물물교환
        </div>
        <div className={activeNav === 2 ? 'menu active' : 'menu'} onClick={() => setActiveNav(2)}>
          재능교환
        </div>
      </E.Memubar>
      {/* 아이콘 */}
      <E.ExchangeContainer>
        {activeNav === 1 ?
          <MapIcons
          icons={Object.values(ObjectIcons[0])}
          munus={ObjectMenus}
          />
        :
          <MapIcons
          icons={Object.values(TalentIcons[0])}
          munus={TalentMenus}
          />
        }
      </E.ExchangeContainer>
    </E.Wrapper>
  );
};

export default Exchange;