import {
  CloudLightning,
  CloudLightningIcon,
  Dot,
  Flashlight,
  Share,
  StarIcon,
  Zap,
} from "lucide-react";
import { Badge } from "../../ui/badge";
import { tags } from "@/config";
import { NavLink } from "react-router-dom";
import { Button } from "react-scroll";
import { ImFire } from "react-icons/im";
import HeaderTitle from "./HeaderTitle";
import HeaderIcons from "./HeaderIcons";
import HeaderVideo from "./HeaderVideo";
import HeaderRight from "./HeaderRight";

const CompanyHeaderSection = () => {
  return (
    <div className="md:pt-20 md:pb-12 md:px-5">
      <header>
        <div className="flex flex-col md:flex-row md:justify-between md:pr-10">
          <HeaderTitle />
          <HeaderIcons isHidden="true" />
        </div>
      </header>
      <div className="flex flex-col md:flex-row md:justify-between my-5 w-full ">
        <HeaderVideo />
        <HeaderRight />
      </div>
    </div>
  );
};

export default CompanyHeaderSection;
