import BigTitle from '@/components/common/BigTitle';
import styled from 'styled-components';
import SelectBox from '../SelectBox';

interface IPostSectionProps {
  label: string;
  placeholder: string;
  option: number;
}

const PostSection = ({label, placeholder, option}: IPostSectionProps) => {
  return (
    <Container>
      <BigTitle>{label}</BigTitle>
      <SelectBox
        placeholder={placeholder}
        option={option}
      />
    </Container>
  );
};

export default PostSection;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;