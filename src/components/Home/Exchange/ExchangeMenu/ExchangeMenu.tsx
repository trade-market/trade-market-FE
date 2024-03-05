import ExchangeOptions from '@/Options/ExchangeOptions';
import { useState } from 'react';
import { ObjectIcons, TalentIcons } from '../ExchageIcons';
import MapIcons from '../MapIcons';
import Menubar from '../Menubar/Menubar';
import * as E from './styles';

const Exchange = () => {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <E.Wrapper>
      {/* <Icon /> */}
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
