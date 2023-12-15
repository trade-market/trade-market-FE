import React from 'react';
import styled from 'styled-components';
import MannerTypeItem from './MannerTypeItem';

export const mannerDumyData = [
  {
    type: '응답이 빨라요',
    count: 12,
    isBadManner: false,
  },
  {
    type: '친절하고 매너가 좋아요',
    count: 5,
    isBadManner: false,
  },
  {
    type: '시간 약속을 잘 지켜요',
    count: 12,
    isBadManner: false,
  },
];

export const badMannerDumyData = [
  {
    type: '응답이 느려요',
    count: 12,
    isBadManner: true,
  },
  {
    type: '불친절해요',
    count: 4,
    isBadManner: true,
  },
  {
    type: '제품 상태가 말한 것과 달라요',
    count: 1,
    isBadManner: true,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface IMannerTypeListProps {
  isBadManner: boolean;
}

// Todo: API 명세서 확인 후 렌더링 방식 수정 필요
function MannerTypeList({ isBadManner }: IMannerTypeListProps) {
  return (
    <Container>
      {isBadManner
        ? badMannerDumyData.map((data, index) => (
            <MannerTypeItem
              key={index}
              count={data.count}
              message={data.type}
              isBadManner={data.isBadManner}
            />
          ))
        : mannerDumyData.map((data, index) => (
            <MannerTypeItem
              key={index}
              count={data.count}
              message={data.type}
              isBadManner={data.isBadManner}
            />
          ))}
    </Container>
  );
}

export default MannerTypeList;
