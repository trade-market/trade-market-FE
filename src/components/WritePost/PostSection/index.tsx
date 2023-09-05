import BigTitle from '@/components/common/BigTitle';
import styled from 'styled-components';

interface IPostSectionProps {
  label: string;
  children?: React.ReactNode;
}

const PostSection = ({label, children}: IPostSectionProps) => {
  return (
    <Container>
      <BigTitle>{label}</BigTitle>
      { children }
    </Container>
  );
};

export default PostSection;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;