import React from 'react';
import BigTitle from '@/components/common/BigTitle';
import * as T from './styes';

interface ITitleSectionProps {
  h1Text?: string;
  h2Text?: string;
  h3Text?: string;
}

function TitleSection({ h1Text, h2Text, h3Text }: ITitleSectionProps) {
  return (
    <T.Container>
      <BigTitle>{h1Text}</BigTitle>
      <T.SubTitle>{h2Text}</T.SubTitle>
      <T.H3Text>{h3Text}</T.H3Text>
    </T.Container>
  );
}

export default TitleSection;
