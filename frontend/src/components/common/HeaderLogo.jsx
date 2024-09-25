import React from "react";
import republicLogo from "../../assets/logo/republic_logo.png";
const HeaderLogo = () => {
  return (
    <div className="flex items-center h-[30px] md:h-[30px]">
      <img className="h-[45px] md:h-[50px]" src={republicLogo} alt="logo" />
      <h1 className="font-bold  text-[25px] ">Republic</h1>
    </div>
  );
};

export default HeaderLogo;
