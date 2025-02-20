import React from "react";

const TiltText = ({ tiltRef }) => {
  return (
    <div
      id="tiltDiv"
      ref={tiltRef}
      className="teltText relative text-white font-[font5]"
    >
      <h1 className="sm:text-5xl lg:text-6xl leading-[1]">
        I AM A <span className="block md:hidden"></span>
        <span className="text-black">BRAND</span>™
      </h1>

      <h2 className="sm:text-[5rem] lg:text-8xl xl:text-9xl leading-[0.8]">
        ARCHITECT
      </h2>

      <h1 className="text-7xl sm:text-5xl lg:text-6xl">TO HIRE</h1>
    </div>
  );
};

export default TiltText;
