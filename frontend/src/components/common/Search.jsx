import React from "react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <Input
      type="search"
      className="rounded-full flex w-[200px] border-white bg-slate-50   text-xl text-gray-400 py-2 px-[46px] "
      placeholder="Search"
    />
  );
};

export default Search;
