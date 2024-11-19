import React from "react";

const SearchInput = ({ onClose }) => {


  return (
    <div className="flex w-[500px] focus:border flex-wrap md:flex-nowrap gap-4 border-red-700">
  <input
    type="text"
    className="w-full p-2 text-white bg-transparent border-2 border-red-700 rounded-lg focus:outline-none focus:border-red-700"
    placeholder="Search, Movies, Series"
  />
</div>

  );
};

export default SearchInput;
