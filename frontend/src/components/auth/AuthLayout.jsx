import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-white h-screen w-screen">
      <Header />
      {children}
    </div>
  );
};

export default AuthLayout;
