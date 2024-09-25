import React from "react";
import logo from "../../../assets/logo/avawatz_logo.png";
import { Badge } from "@/components/ui/badge";
import { tags } from "@/config";
import { NavLink } from "react-router-dom";
const specialTag = { title: "SPECIAL", icon: "zap", path: "", color: "" };

const HeaderTitle = () => {
  return (
    <div className="flex px-5 flex-col gap-3 max-w-[508px] lg:min-w-full">
      <div className="h-12 flex items-center">
        <img src={logo} className="h-10 " alt="logo" />
        <h1 className="text-black font-bold h-full text-5xl">Avawatz</h1>
      </div>
      <h1 className="text-wrap text-gray-500 text-base md:text-lg text-left">
        Trusted AI Robotics: Transforming Safety Across High-Risk and Tedious
        Tasks
      </h1>
      <div className="flex flex-wrap  lg:flex-nowrap flex-row md:items-center md: gap-1">
        <Badge
          className="cursor-pointer h-5 rounded-sm text-[10px] flex gap-1 text-red-500 border-red-500"
          variant="outline"
        >
          {specialTag.title}
        </Badge>
        {tags.map((item) => (
          <NavLink className="m-0 p-0 h-5" key={item.title}>
            <Badge
              className={`cursor-pointer h-full rounded-sm text-[10px] flex gap-1 text-gray-500`}
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </Badge>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HeaderTitle;
