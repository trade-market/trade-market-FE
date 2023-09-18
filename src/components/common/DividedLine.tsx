import styled from 'styled-components';

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.whiteGray};
`;

function DividedLine() {
  return <Line />;
}

export default DividedLine;
