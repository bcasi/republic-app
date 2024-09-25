import React from "react";
import { ImFire } from "react-icons/im";

const HeaderInvestorAndDays = () => {
  return (
    <div className="sm:flex gap-5 md:block border-b-2 md:border-b-0 border-gray-300 ">
      <div className="flex flex-1 border-r-2 md:border-r-0  md:py-5 flex-col items-start md:border-b-2 border-b-gray-300">
        <h1 className="text-3xl font-bold">19</h1>
        <div className="flex md:flex-row w-full justify-between">
          <p className="text-gray-500 text-lg">Investors</p>
        </div>
      </div>
      <div className="flex flex-1 md:py-5 flex-col items-start border-b-gray-500">
        <div className="flex gap-1">
          <ImFire className="text-red-500 text-3xl" />
          <h1 className="text-3xl font-bold"> 6 days</h1>
        </div>
        <div className="flex md:flex-row w-full justify-between">
          <p className="text-gray-500 text-lg">Left to invest</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderInvestorAndDays;
