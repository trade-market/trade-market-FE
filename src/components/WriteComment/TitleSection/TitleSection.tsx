import BigTitle from '@/components/common/BigTitle';
import * as T from './TitleSectionStyles';

interface ITitleSectionProps {
  h1Text: string;
  h2Text: string;
}

function TitleSection({ h1Text, h2Text }: ITitleSectionProps) {
  return (
    <T.Container>
      <BigTitle>{h1Text}</BigTitle>
      <T.SubTitle>{h2Text}</T.SubTitle>
    </T.Container>
  );
}

export default TitleSection;
