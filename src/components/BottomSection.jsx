import React from "react";
import bottomImg from "../assets/images/choco-stand.jpg";

const BottomSection = () => {
  return (
    <>
      <div id="footer" className="flex items-center justify-center w-full h-[120vh]">
        <img className="w-full h-full object-cover" src={bottomImg} alt="" />
      </div>
    </>
  );
};

export default BottomSection;
