import { Container, CloseButton, OptionButton } from './CommonHeaderStyles';
import GobackBtn from './GobackBtn';
import Close from '@Assets/offer/Write-comment/close.svg';
import optionDot from '@Assets/offer/Detailed-page/option_dot.svg';

interface ICommonHeaderProps {
  children?: React.ReactNode;
  onClick?: () => void;
  display?: string;
  closeClick?: () => void;
  optionClick?: () => void;
  isMyPost?: boolean;
  hideGobackButton?: boolean;
}

const CommonHeader = ({
  children,
  onClick,
  display = 'none',
  closeClick,
  optionClick,
  isMyPost = false,
  hideGobackButton = false,
  
}: ICommonHeaderProps) => {

  return (
    <Container>
      {!hideGobackButton && <GobackBtn onClick={onClick} />}
      <div className={!hideGobackButton ? 'title Only' : 'title'}>
        {children}
      </div>
      <CloseButton
        $display={display}
        onClick={closeClick}
      >
        <img src={Close} />
      </CloseButton>
      {isMyPost && (
        <OptionButton src={optionDot} alt="옵션" onClick={optionClick} />
      )}
    </Container>
  );
};

export default CommonHeader;
