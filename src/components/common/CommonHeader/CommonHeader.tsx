import {
  Container,
  CloseButton,
  OptionButton,
  DeleteButton,
  CancelButton,
} from './CommonHeaderStyles';
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
  onDeleteClick?: () => void;
  onCancelClick?: () => void;
  visibleHeart?: boolean;
  visibleOption?: boolean;
  visibleDeleteBtn?: boolean;
  hiddenGoBack?: boolean;
  visibleCloseButtonLeft?: boolean;
}

const CommonHeader = ({
  children,
  onClick,
  display = 'none',
  closeClick,
  heartClick,
  optionClick,
  onDeleteClick,
  onCancelClick,
  visibleHeart = false,
  visibleOption = false,
  visibleDeleteBtn = false,
  hiddenGoBack = false, // 중첩 경로 중 특정 경로에서만 hide시
  visibleCloseButtonLeft = false, // 닫기 버튼이 왼쪽에 있을 시
}: ICommonHeaderProps) => {
  const currentPath = window.location.pathname;
  const hideGobackButton = ['/', '/my-page', `/chat-list`].includes(
    currentPath
  );

  return (
    <Container $hidden={hideGobackButton}>
      {visibleDeleteBtn && (
        <CancelButton onClick={onCancelClick}>취소</CancelButton>
      )}
      {!hideGobackButton && !hiddenGoBack && !visibleDeleteBtn && (
        <GobackBtn onClick={onClick} />
      )}
      {visibleCloseButtonLeft && (
        <CloseButton $display={display} onClick={closeClick}>
          <img src={Close} />
        </CloseButton>
      )}
      <div className={hideGobackButton ? 'title Only' : 'title'}>
        {children}
      </div>
      {!visibleCloseButtonLeft && (
        <CloseButton $display={display} onClick={closeClick}>
          <img src={Close} />
        </CloseButton>
      )}
      {visibleHeart && (
        <OptionButton src={UnLikeIcon} alt="관심목록" onClick={heartClick} />
      )}
      {visibleOption && (
        <OptionButton src={optionDot} alt="옵션" onClick={optionClick} />
      )}
      {visibleDeleteBtn && (
        <DeleteButton onClick={onDeleteClick}>삭제</DeleteButton>
      )}
    </Container>
  );
};

export default CommonHeader;
