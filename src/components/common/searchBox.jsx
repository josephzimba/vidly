import React from "react";
import Input from "./input";

const SearchBox = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Search..."
      name="query"
      className="form-control my-3"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
