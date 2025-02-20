import React, { useEffect, useState, useRef } from "react";
import video from "../assets/videos/page12Video.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page12 = () => {
  const [date, setDate] = useState(new Date().getFullYear());

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  const first = useRef(null);

  useGSAP(() => {
    if (first.current) {
      gsap.from(first.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: first.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section
      id="page12"
      className="h-screen bg-white p-4 flex items-center justify-center"
    >
      <div className="page12In h-full w-full bg-black rounded-4xl overflow-hidden relative shadow-4-sided">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Background video showcasing creative digital projects"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1
          ref={first}
          className="absolute inset-0 flex items-center justify-center text-white text-[13vw] leading-[0.8] font-[font4] text-center p-4 z-20"
        >
          Let&apos;s Build Something Amazing Together!
        </h1>

        <footer className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-lg font-[font6] text-center z-20">
          &copy; {date} Rahul Pal. All Rights Reserved.
        </footer>
      </div>
    </section>
  );
};

export default Page12;
