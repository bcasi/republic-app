import { Share, StarIcon } from "lucide-react";
import React from "react";

const HeaderIcons = ({ isHidden = false }) => {
  return (
    <div className={`${isHidden ? "hidden" : "block"} md:flex md:gap-5`}>
      <StarIcon className="text-gray-500 hover:text-blue-500" />
      <Share className="text-gray-500 hover:text-blue-500" />
    </div>
  );
};

export default HeaderIcons;
