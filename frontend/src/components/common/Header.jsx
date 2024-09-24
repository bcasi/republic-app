import React from "react";
import Search from "./Search";
import HeaderLogo from "./HeaderLogo";
import Container from "./Container";
import { Button } from "react-scroll";
import { Globe } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full  border-b-2 border-gray-300 h-[75px]">
      <Container>
        <div className="flex justify-between px-5  items-center my-0">
          <div className="flex gap-3 justify-evenly items-center">
            <HeaderLogo />
            <h2 className="text-gray-500">Investors</h2>
            <h2 className="text-gray-500">Businesses</h2>
            <Search />
          </div>
          <div className="flex justify-between px-5 m-5 items-center">
            <Button className="border-0 flex hover:bg-gray-200  gap-1 p-2 rounded-md">
              <Globe />
              US
            </Button>
            <NavLink to="/login" className="border-0 flex gap-1 p-2 rounded-md">
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="border-0 flex gap-1 p-2 rounded-md"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
