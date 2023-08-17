import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 21px;
  padding-top: 68px;
`;

export const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: 44px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 16px;
  width: 100%;
  height: 48px;
  margin-right: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.lightGray};
  background-color: #f9f9fb;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const ErrorText = styled.div`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.font.size.small};
  color: red;
  text-align: center;
`;

export const Button = styled.button<{ disabled: boolean }>`
  width: 100%;
  max-width: 135px;
  padding: 15px 42px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.disableBtn : theme.color.activeBlue};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 600;
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray : theme.color.white};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
`;

export const CurrentLocationBtn = styled.button`
  width: 100%;
  height: 52px;
  padding: 17px 0px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.activeBlue};
  background-color: inherit;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.activeBlue};
  cursor: pointer;
  margin-top: 20px;
`;

export const CompleteButton = styled(Button)`
  height: 52px;
  max-width: 100%;
`;
