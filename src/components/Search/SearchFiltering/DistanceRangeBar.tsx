import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import styled from 'styled-components';

interface IModalCheckboxProps {
  sort_type: string;
  contents: string[];
  setSelectFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const DistanceRangeBar = ({sort_type, contents, setSelectFilter} : IModalCheckboxProps) => {
  const [values, setValues] = useState([3]);
  const scales = ['1km', '3km', '5km', '10km'];
  const STEP = 1;
  const MIN = 1;
  const MAX = 4;

  const createScale = () => {
    let TagList = [];

    // scales.forEach((scale, i) => {
    //   TagList.push(
    //     <Tag key={i}>
    //       {scale}
    //     </Tag>
    //   );
    // })

    // return TagList;
    

    for (let i = 0; i < scales.length; i++) {
      TagList.push(
        <Tag key={i}>
          {scales[i]}
        </Tag>
      );
    }

    return TagList;
  };


return (
        <Wrapper>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={values => setValues(values)}
            renderTrack={({ props, children }) => {
              return (
                <RangeBarConatiner
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                >
                  <RangeBar
                    ref={props.ref}
                    style={{
                      background: getTrackBackground({
                        values: values,
                        colors: ["#2156F2", "#F2F2F2"],
                        min: MIN,
                        max: MAX
                      }),
                    }}
                  >
                    {children}
                    <RangeTagContainer>{createScale()}</RangeTagContainer>
                  </RangeBar>
                </RangeBarConatiner>
              );
            }}
            renderThumb={({ props }) => (
              <RangeCircle
                {...props}
              />
            )}
          />
        </Wrapper>
    );
};

export default DistanceRangeBar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  position: relative;
  padding: 0 2px;
`;

const RangeBarConatiner = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
`;

const RangeBar = styled.div`
  display: flex;
  height: 10px;
  width: 100%;
  border-radius: 12px;
  align-self: center;
`;

const RangeTagContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  padding: 0 3px;
  :nth-child(3) {
    padding-left: 18px;
  }
`;

const Tag = styled.div`
  color : ${({ theme }) => theme.color.activeBlue};
  font-size: ${({ theme }) => theme.font.size.base};
`;

const RangeCircle = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 15px;
  background-color:  ${({ theme }) => theme.color.white};
  box-shadow: 0.5px 0.5px 3px 0.5px ${({ theme }) => theme.color.gray};
  -webkit-box-shadow: 0.5px 0.5px 3px 0.5px ${({ theme }) => theme.color.gray};
`;
