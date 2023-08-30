import BigTitle from '@/components/common/BigTitle';
import styled from 'styled-components';

interface IPostSectionProps {
  text: string;
}

const PostSection = ({text}: IPostSectionProps) => {
  return (
    <Container>
      <BigTitle>{text}</BigTitle>
    </Container>
  );
};

export default PostSection;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background-color: yellow;
`;