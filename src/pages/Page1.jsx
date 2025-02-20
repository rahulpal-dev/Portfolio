import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import bgImage from "../assets/images/bg.webp";
import bgMobileImage from "../assets/images/bgMobile.png";
import logo from "../assets/images/logo.webp";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [bg, setBg] = useState(window.innerWidth < 768 ? bgMobileImage : bgImage);

  useEffect(() => {
    const handleResize = () => {
      setBg(window.innerWidth < 768 ? bgMobileImage : bgImage);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mouseMoving = (e) => {
    if (!tiltRef.current) return;

    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.x - rect.width / 2) / 17;
    const y = -(e.clientY - rect.y - rect.height / 2) / 17;

    gsap.to(tiltRef.current, {
      rotateX: y,
      rotateY: x,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      id="page1"
      onMouseMove={mouseMoving}
      className="h-screen relative p-4 bg-white overflow-x-hidden"
    >
      <div
        id="page1-in"
        className="overflow-hidden relative h-full w-full p-10 bg-cover bg-center rounded-4xl shadow-xl flex flex-col justify-between shadow-4-sided"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <img
            className="logo h-20 md:h-16 lg:h-12 xl:h-16"
            src={logo}
            alt="Brand logo - Rahul Pal"
          />
        </div>
        <TiltText tiltRef={tiltRef} />
        <div>
          <Page1Bottom />
        </div>
      </div>
    </div>
  );
};

export default Page1;
