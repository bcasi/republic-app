import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import React from "react";
import { ImFire } from "react-icons/im";
import { Button } from "react-scroll";
import HeaderInvestorAndDays from "./HeaderInvestorAndDays";

const HeaderRight = () => {
  return (
    <div className="flex flex-col md:flex-col px-3 md:w-[30%]">
      <div className="flex flex-col gap-5 mt-12 md:mt-0">
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
      <div className="flex md:flex-col">
        <Button className="bg-blue-700 text-lg font-medium from-accent-foreground hover:bg-blue-600 text-white rounded-sm w-full h-10">
          Invest in Avawatz
        </Button>
        <div className="flex md:flex-row md:justify-around gap-0 mt-3">
          <p className="text-sm">$2,500 minimum investment</p>
          <p className="text-sm">
            <Dot />
          </p>
          <p className="text-blue-500 text-sm">Form CRS</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
