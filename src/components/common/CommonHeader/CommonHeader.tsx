import { Container, CloseButton, OptionButton } from './CommonHeaderStyles';
import GobackBtn from './GobackBtn';
import Close from '@Assets/offer/Write-comment/close.svg';
import optionDot from '@Assets/offer/Detailed-page/option_dot.svg';
import UnLikeIcon from '@Assets/Icons/Home/Post/Icon_unlike.svg';

interface ICommonHeaderProps {
  children?: React.ReactNode;
  onClick?: () => void;
  display?: string;
  closeClick?: () => void;
  heartClick?: () => void;
  optionClick?: () => void;
  visibleHeart?: boolean;
  visibleOption?: boolean;
}

const CommonHeader = ({
  children,
  onClick,
  display = 'none',
  closeClick,
  heartClick,
  optionClick,
  visibleHeart = false,
  visibleOption = false,
}: ICommonHeaderProps) => {
  const currentPath = window.location.pathname;
  const hideGobackButton = ['/', '/my-page', '/chat-list'].includes(currentPath);

  return (
    <Container $hidden={hideGobackButton}>
      <GobackBtn onClick={onClick} />
      <div className={!hideGobackButton ? 'title Only' : 'title'}>
        {children}
      </div>
      <CloseButton
        $display={display}
        onClick={closeClick}
      >
        <img src={Close} />
      </CloseButton>{' '}
      {visibleHeart && (
        <OptionButton src={UnLikeIcon} alt="관심목록" onClick={heartClick} />
      )}
      {visibleOption && (
        <OptionButton src={optionDot} alt="옵션" onClick={optionClick} />
      )}
    </Container>
  );
};

export default CommonHeader;
