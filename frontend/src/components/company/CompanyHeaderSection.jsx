import React from "react";
import logo from "../../assets/logo/avawatz_logo.png";
import {
  CloudLightning,
  CloudLightningIcon,
  Flashlight,
  Share,
  StarIcon,
  Zap,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { tags } from "@/config";
import { NavLink } from "react-router-dom";

const specialTag = { title: "SPECIAL", icon: "zap", path: "", color: "" };

const CompanyHeaderSection = () => {
  return (
    <div className="md:pt-20 md:pb-12 md:px-5">
      <header>
        <div className="flex md:flex-row md:justify-between md:pr-10">
          <div className="flex md:flex-col gap-3">
            <div className="h-12 flex  items-center">
              <img src={logo} className="h-10 " alt="logo" />
              <h1 className="text-black font-bold h-full text-5xl">Avawatz</h1>
            </div>
            <h1 className="text-wrap text-gray-500 text-lg">
              Trusted AI Robotics: Transforming Safety Across High-Risk and
              Tedious Tasks
            </h1>
            <div className="flex md:flex-row md:items-center md: gap-1">
              <Badge
                className="cursor-pointer  rounded-sm text-[10px] flex gap-1 text-red-500 border-red-500"
                variant="outline"
              >
                {/* <Zap className="text-[10px] w-3 text-red-500" /> */}
                {specialTag.title}
              </Badge>
              {tags.map((item) => (
                <NavLink className="m-0 p-0 h-full" key={item.title}>
                  <Badge
                    className="cursor-pointer rounded-sm text-[10px] flex gap-1 text-gray-500"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.title}
                  </Badge>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex md:gap-5">
            <StarIcon className="text-gray-500 hover:text-blue-500" />
            <Share className="text-gray-500 hover:text-blue-500" />
          </div>
        </div>
      </header>
      <div className="flex md:flex-row justify-between my-5 w-full">
        <div className="w-full m-0 p-0">
          <iframe
            width="725"
            height="408"
            src="https://www.youtube.com/embed/2HZ2vKKF2Vc?si=hhEVwuB9t8SVPTsg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeaderSection;
