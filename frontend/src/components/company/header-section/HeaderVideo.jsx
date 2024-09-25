import React from "react";

const HeaderVideo = () => {
  return (
    <div className="m-0 p-0 w-full">
      <iframe
        className="w-full px-5 min-h-[358px] md:w-[465px] md:h-[263px] lg:w-[725px] lg:h-[500px]"
        src="https://www.youtube.com/embed/2HZ2vKKF2Vc?si=hhEVwuB9t8SVPTsg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default HeaderVideo;
