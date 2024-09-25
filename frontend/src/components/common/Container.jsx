import React from "react";

const Container = ({ children, isHidden = false }) => {
  return (
    <div
      className={`my-0  md:block mx-auto w-full  md:max-w-[1152px] h-full max-h-screen ${
        isHidden ? "hidden" : "block md:block"
      }`}
    >
      <div>{children}</div>
    </div>
  );
};

export default Container;
