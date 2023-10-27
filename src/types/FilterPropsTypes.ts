interface FilterPropsType {
  sort_type: string;
  contents: string[];
  setSelectFilter?: React.Dispatch<React.SetStateAction<string[]>>;
};

export default FilterPropsType;