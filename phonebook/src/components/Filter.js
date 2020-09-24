import React, { useEffect } from "react";

const Filter = (props) => {
  const { filterValue, setFilterValue, onFilterList } = props;

  useEffect(() => {
    console.log(setFilterValue);
    setFilterValue(filterValue);
  });
  return (
    <span>
      <p>filter shown with</p>
      <input value={filterValue} onChange={onFilterList} />
    </span>
  );
};

export default Filter;
