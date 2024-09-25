import React from "react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <Input
      type="search"
      className="rounded-full flex md:w-[40px] md:h-[40px] lg:w-[200px] border-white bg-slate-50   text-xl text-gray-400 lg:py-2 lg:px-[46px] "
      placeholder="Search"
    />
  );
};

export default Search;
