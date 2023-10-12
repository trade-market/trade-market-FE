import { useState } from 'react';
import * as E from './ExchageMenuStyles';
import { ObjectIcons, TalentIcons } from './ExchageIcons';
import MapIcons from './MapIcons';
import Menubar from './Menubar';
import ExchangeOptions from '@/Options/ExchangeOptions';


const Exchange = () => {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <E.Wrapper>
      <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <E.ExchangeContainer>
        {activeNav === 1 ?
          <MapIcons
          icons={Object.values(ObjectIcons[0])}
          munus={ExchangeOptions[0].contents}
          />
        :
          <MapIcons
          icons={Object.values(TalentIcons[0])}
          munus={ExchangeOptions[1].contents}
            />
          }
      </E.ExchangeContainer>
    </E.Wrapper>
  );
};

export default Exchange;