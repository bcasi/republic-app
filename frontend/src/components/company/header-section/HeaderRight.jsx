import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import React from "react";
import { ImFire } from "react-icons/im";
import { Button } from "react-scroll";
import HeaderInvestorAndDays from "./HeaderInvestorAndDays";
import HeaderInvest from "./HeaderInvest";

const HeaderRight = () => {
  return (
    <div className="flex flex-col md:flex-col px-3 md:w-[30%]">
      <div className="flex flex-col px-2 md:px-0 gap-5 mt-12 md:mt-0">
        <Badge className="cursor-pointer text-center w-[200px] md:w-full  rounded-sm text-[10px] font-semibold flex gap-1 bg-gray-200 text-red-500 capitalize">
          SPECIAL TERMS: 36D 17H 43M LEFT
        </Badge>
        <div className="flex md:py-5 flex-col items-start border-b-2 border-b-gray-300">
          <h1 className="text-3xl font-bold">$ 361, 384</h1>
          <div className="flex md:flex-row w-full justify-between items-center">
            <p className="text-gray-500 text-lg">Committed</p>
            <Badge className="cursor-pointer text-center hover:bg-gray-200 bg-gray-200 rounded-sm text-xs w-4 h-4">
              i
            </Badge>
          </div>
        </div>
        <HeaderInvestorAndDays />
      </div>
      <HeaderInvest />
    </div>
  );
};

export default HeaderRight;
