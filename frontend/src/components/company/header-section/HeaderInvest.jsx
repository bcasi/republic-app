import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import React from "react";

const HeaderInvest = () => {
  return (
    <div className="flex flex-col py-5 bg-white border-t-2 sticky md:static bottom-0 border-t-gray-200 md:flex-col">
      <Button className="bg-blue-700 text-lg font-medium from-accent-foreground hover:bg-blue-600 text-white rounded-sm w-full h-10">
        Invest in Avawatz
      </Button>
      <div className="flex justify-around flex-row  gap-0 mt-3">
        <p className="text-sm">$2,500 minimum investment</p>
        <p className="text-sm">
          <Dot />
        </p>
        <p className="text-blue-500 text-sm">Form CRS</p>
      </div>
    </div>
  );
};

export default HeaderInvest;
