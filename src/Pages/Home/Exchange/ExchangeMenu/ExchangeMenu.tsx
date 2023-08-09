import { useState } from 'react';
import * as E from './ExchageMenuStyles';
import { ObjectIcons, TalentIcons } from './ExchageIcons';

const Exchange = () => {
  const [isActive, setIsActive] = useState<string | undefined>('물물교환');
  const menus = ['물물교환', '재능교환'];
  const ObjectMenus = ['전자기기', '생활 가전', '가구', '생활/주방', '도서', '의류', '미용/뷰티', '스포츠/레저', '취미', '중고차', '티켓', '식품'];
  const TalentMenus = ['국어', '영어', '제2외국어', '개발/코딩', '디자인', '수학', '미술', '운동', '주식', '미용/뷰티', '취업', '자격증', '음악', '단순 인력'];


  return (
    <E.Wrapper>
      {/* 메뉴 */}
      <E.Memubar>
        {menus.map((menuTap, i) => {
          return (
            <div key={i} className='menu'>
              <div>{menuTap}</div>
            </div>
            )
        })}
      </E.Memubar>

      {/* 아이콘 */}
      <E.ExchangeContainer>
        {Object.values(ObjectIcons[0])
          .map((_, i) => {
          const iconSrc = Object.values(ObjectIcons[0]);
          return (
            <div key={i} className='eachIcon'>
              <img src={iconSrc[i]} />
              <div className='iconName'>{ObjectMenus[i]}</div>
            </div>
          )
          })}
          {/* {Object.values(TalentIcons[0])
          .map((_, i) => {
          const iconSrc = Object.values(TalentIcons[0]);
          return (
            <div key={i} className='eachIcon'>
              <img src={iconSrc[i]} />
              <div className='iconName'>{TalentMenus[i]}</div>
            </div>
          )
        })} */}
      </E.ExchangeContainer>
    </E.Wrapper>
  );
};

export default Exchange;