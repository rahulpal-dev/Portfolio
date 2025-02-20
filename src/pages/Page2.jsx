import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect } from "react";

const Page2 = () => {
  

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let viewportHeight = window.innerHeight || 800;

    gsap.utils.toArray(".rotateText").forEach((el, i) => {
      gsap.from(el, {
        rotateX: -80,
        opacity: 0,
        duration: 1,
        delay: i * 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: `+=${viewportHeight / 4}`,
          scrub: 2,
        },
      });
    });
  }, []);

  return (
    <div
      id="section2"
      className="text-center p-10 bg-white text-black overflow-x-hidden"
    >
      <div className="rotateText">
        <h1 className="text-[40vw] font-[font4] leading-[33vw]">IMPACTFUL</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] font-[font4] leading-[33vw]">WEBSITES</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] font-[font4] leading-[33vw]">ELEVATE</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] font-[font4] leading-[33vw]">BRANDS</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] font-[font4] leading-[33vw]">WITH</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[40vw] font-[font4] leading-[33vw]">STRATEGY!</h1>
      </div>
    </div>
  );
};

export default Page2;
