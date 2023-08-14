import { Container } from "./CommonHeaderStyles";
import GobackBtn from "./GobackBtn";

interface ICommonHeaderProps {
  children: React.ReactNode;
}

const CommonHeader = ({ children }: ICommonHeaderProps) => {
  const currentPath = window.location.pathname;
  const hideGobackButton = ['/', '/auth',].includes(currentPath);

  return (
    <Container>
      {!hideGobackButton && <GobackBtn />}
      <div className={ hideGobackButton ? "title Only" : "title"}>
        {children}
      </div>
    </Container>
  )
};

export default CommonHeader;