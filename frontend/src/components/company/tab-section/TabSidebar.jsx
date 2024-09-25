import { tabs } from "@/config";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const TabSidebar = () => {
  return (
    <nav className="relative z-40 flex-col gap-2">
      {tabs.map((item) => (
        <Link key={item.title}>{item.title}</Link>
      ))}
    </nav>
  );
};

export default TabSidebar;
