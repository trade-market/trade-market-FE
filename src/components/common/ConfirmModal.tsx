import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  width: 100%;
  height: 203px;
  z-index: 999;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgColor};
  box-shadow: 0px 0px 12px 0px rgba(33, 86, 242, 0.1);

  .title {
    color: ${({ theme }) => theme.color.Mainblue};
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: 600;
    position: absolute;
    bottom: calc(50% + 36px);
    width: 100%;
    text-align: center;
  }

  .content {
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 15px;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  button {
    width: 50%;
    border: none;
    padding: 11px;
  }

  .close-btn {
    color: ${({ theme }) => theme.color.lightGray};
    border-bottom-left-radius: 8px;
  }

  .ok-btn {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.Mainblue};
  }

  .initial-ok-btn {
    border-bottom-right-radius: 8px;
  }

  .final-ok-btn {
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

interface IConfirmModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  confirmedContent: string;
  closeAction: () => void;
  onFinalOkClick: () => void;
}

function ConfirmModal({
  isOpen,
  title,
  content,
  confirmedContent,
  onFinalOkClick,
  closeAction,
}: IConfirmModalProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleInitialOkBtnClick = () => setIsConfirmed(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      <ModalBackground />
      <ModalWrapper>
        <h1 className="title">{title}</h1>
        <p className="content">{!isConfirmed ? content : confirmedContent}</p>
        <ButtonWrapper>
          {!isConfirmed ? (
            <>
              <button className="close-btn" onClick={closeAction}>
                닫기
              </button>
              <button
                className="ok-btn initial-ok-btn"
                onClick={handleInitialOkBtnClick}
              >
                확인
              </button>
            </>
          ) : (
            <button className="ok-btn final-ok-btn" onClick={onFinalOkClick}>
              확인
            </button>
          )}
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
}

export default ConfirmModal;
