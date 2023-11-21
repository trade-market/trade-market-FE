import React, { useState } from 'react';
import * as E from './ExchageMenuStyles';
import { ObjectIcons, TalentIcons } from './ExchageIcons';
import MapIcons from './MapIcons';
import Menubar from './Menubar';
import ExchangeOptions from '@/Options/ExchangeOptions';

const Exchange = () => {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <E.Wrapper>
      <Menubar activeNav={activeNav} setActiveNav={setActiveNav} />
      <E.ExchangeContainer>
        <MapIcons
          activeNav={activeNav}
          icons={
            activeNav === 0
              ? Object.values(ObjectIcons[0])
              : Object.values(TalentIcons[0])
          }
          munus={ExchangeOptions[activeNav].contents}
        />
      </E.ExchangeContainer>
    </E.Wrapper>
  );
};

export default Exchange;
