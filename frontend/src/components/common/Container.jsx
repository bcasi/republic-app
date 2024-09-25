import React from "react";

const Container = ({ children }) => {
  return (
    <div className="my-0 hidden md:block mx-auto w-full  md:max-w-[1152px] h-full max-h-screen">
      <div>{children}</div>
    </div>
  );
};

export default Container;
