import React, { useEffect } from "react";

const Filter = (props) => {
  const { filterValue, setFilterValue, onFilterList } = props;

  useEffect(() => {
    setFilterValue(filterValue);
  });
  return (
    <span>
      <p>Filter shown with</p>
      <input value={filterValue} onChange={onFilterList} />
    </span>
  );
};

export default Filter;
