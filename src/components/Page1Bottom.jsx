import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import fiverrLogo from "../assets/images/fiverr.webp";
import linkedinLogo from "../assets/images/linkedin.webp";

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      ease: "linear",
      repeat: -1,
      transformOrigin: "center center",
    });
  });

  return (
    <div className="p1Bottom absolute w-full left-0 bottom-0 flex flex-end px-10 py-8 justify-between items-center">
      <div className="xl:pt-20 lg:pt-40 text-2xl">
        <h3 className="text-white font-[font1]">
          WEB DEVELOPMENT | GRAPHIC DESIGN
        </h3>
        <h4 className=" text-gray-400 font-[font2]">DIGITAL MARKETING</h4>
      </div>
      <div id="banner" className="absolute right-0 bottom-0 pr-10 mb-4">
        <a
          href="https://www.fiverr.com/s/yvm0KrZ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hire me on Fiverr for web design, development, and marketing services"
        >
          <img
            className="bg-white border-2 border-white rounded-full w-20 mb-2"
            src={fiverrLogo}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-pal-61446a333/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Rahul Pal on LinkedIn"
        >
          <img
            className="bg-white border-2 border-white rounded-full w-20 mb-2"
            src={linkedinLogo}
          />
        </a>
      </div>
    </div>
  );
};

export default Page1Bottom;
