import React from "react";

const Container = ({ children }) => {
  return (
    <div className="my-0 mx-auto  max-w-[1152px] h-full max-h-screen">
      <div>{children}</div>
    </div>
  );
};

export default Container;
