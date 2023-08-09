import { Container } from "./CommonHeaderStyles";

interface ICommonHeaderProps {
  children: React.ReactNode;
}

const CommonHeader = ({ children }: ICommonHeaderProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default CommonHeader;

