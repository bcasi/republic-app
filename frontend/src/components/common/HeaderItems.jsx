import React from "react";
import HeaderLogo from "./HeaderLogo";
import Search from "./Search";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";
import { NavLink } from "react-router-dom";

const HeaderItems = () => {
  return (
    <div className="hidden md:flex  md:justify-between px-5  md:items-center my-0">
      <div className="flex gap-10 justify-evenly items-center">
        <HeaderLogo />
        <h2 className="text-gray-800">Investors</h2>
        <h2 className="text-gray-800">Businesses</h2>
        <Search />
      </div>
      <div className="flex justify-between px-5 m-5 items-center">
        <Button className="border-0 flex hover:bg-gray-200  gap-1 p-2 rounded-md">
          <Globe />
          US
        </Button>
        <NavLink
          to="/login"
          className="border-0 flex gap-1 p-2 rounded-md md:text-md"
        >
          Log in
        </NavLink>
        <NavLink
          to="/register"
          className="border-0 flex gap-1 p-2 rounded-md md:text-md"
        >
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderItems;
