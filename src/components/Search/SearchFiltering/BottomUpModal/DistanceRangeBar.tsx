import { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import styled from 'styled-components';
import FilterPropsTypes from '@/types/FilterPropsTypes';
import useQueryString from '@hooks/useQueryString';

const DistanceRangeBar = ({ sort_type, contents, setSelectFilter }: FilterPropsTypes) => {
  const selected = useQueryString('distance');
  const [values, setValues] = useState([2]);

  const createScale = () => {
    let TagList: JSX.Element[] = [];
    contents.map((content, i) => (
      TagList.push(
        <Tag key={i}>
          {content}
        </Tag>
      )
    ));
    return TagList;
  };

  //* 카테고리 select
  const Selecthandler = (values: number[]) => {
    setValues(values);
    let i = Number(values.join(''));
    setSelectFilter([sort_type, contents[i]]);
  };

  //* 초기값 지정
  useEffect(() => {
    setSelectFilter([sort_type, contents[2]]);
    if (selected) {
      setValues([contents.indexOf(selected)])
    };
  }, []);

  return (
    <Wrapper>
      <Range
        values={values}
        step={1}
        min={0}
        max={3}
        onChange={values => Selecthandler(values)}
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
                    min: 0,
                    max: 3
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
          <RangeThumb
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

const RangeThumb = styled.div`
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
