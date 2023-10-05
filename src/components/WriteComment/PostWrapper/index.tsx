import { size } from '@/styles/theme';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  padding: 0 21px;
`;

interface IWrapperProps {
  children: React.ReactNode;
}

function PostWrapper({ children }: IWrapperProps) {
  return <Container>{children}</Container>;
}

export default PostWrapper;