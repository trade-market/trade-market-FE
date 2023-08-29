import { Container, CloseButton } from './CommonHeaderStyles';
import GobackBtn from './GobackBtn';
import Close from '@Assets/offer/Write-comment/close.svg';

interface ICommonHeaderProps {
  children?: React.ReactNode;
  onClick?: () => void;
  display?: string;
  closeClick?: () => void;
}

const CommonHeader = ({ children, onClick, display='none', closeClick }: ICommonHeaderProps) => {
  const currentPath = window.location.pathname;
  const hideGobackButton = ['/', '/auth'].includes(currentPath);

  return (
    <Container>
      {!hideGobackButton && <GobackBtn onClick={onClick} />}
        <div className={hideGobackButton ? 'title Only' : 'title'}>
          {children}
        </div>
        <CloseButton className='closeButton' $display={display} onClick={closeClick}>
          <img src={Close} />
        </CloseButton>
    </Container>
  );
};

export default CommonHeader;
