import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px 50px 20px;
  margin-top: 10px;
  flex-direction: column;

  /* 최근 검색어 & 전체 삭제 */
  .menu {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > button {
      background-color: transparent;
      border: none;
      padding-right: 12px;
      cursor: pointer;
      color: ${({ theme }) => theme.color.gray};
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  .keywords {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;
    gap: 7px;
  }

  .keyword {
    display: flex;
    margin-top: 5px;
    color: #101010;
    font-size: ${({ theme }) => theme.font.size.small};
    border: 1px solid ${({ theme }) => theme.color.whiteGray};
    padding: 5px 5px 5px 8px;
    border-radius: 20px;
    cursor: pointer;
  }

  .no-keyword {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0 0 0;
    color: #b5b5b5;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  background-color: transparent;
  height: 100%;
  border: none;
  cursor: pointer;
  margin-left: 3px;
  background: url('Close.svg') center no-repeat;
  background-size: 7px;
`;
