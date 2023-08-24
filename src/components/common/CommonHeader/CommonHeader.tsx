import { Container } from './CommonHeaderStyles';
import GobackBtn from './GobackBtn';

interface ICommonHeaderProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const CommonHeader = ({ children, onClick }: ICommonHeaderProps) => {
  const currentPath = window.location.pathname;
  const hideGobackButton = ['/'].includes(currentPath);

  return (
    <Container>
      {!hideGobackButton && <GobackBtn onClick={onClick} />}
      <div className={hideGobackButton ? 'title Only' : 'title'}>
        {children}
      </div>
    </Container>
  );
};

export default CommonHeader;
