import React, { useRef } from "react";
import video from "../assets/videos/page11Video.mp4"; // Fiverr-specific video
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page11 = () => {
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    if (taglineRef.current && headingRef.current && paragraphRef.current) {
      gsap.from(taglineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: taglineRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });

      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });

      gsap.from(paragraphRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section id="page11" className="relative h-screen bg-black p-4">
      {/* Background Video */}
      <div className="page11In relative flex flex-col items-center justify-center h-full p-10 text-center rounded-4xl border-18 border-white overflow-hidden text-white">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Background video showcasing Fiverr services"
        >
          <source src={video} type="video/mp4" />
        </video>

        <h1
          ref={taglineRef}
          className="font-[font4] z-10 text-[7vw] uppercase leading-[0.8]"
        >
          🚀 Elevate Your Brand with Expert Solutions
        </h1>

        <h2
          ref={headingRef}
          className="z-10 text-2xl mb-3 uppercase font-[font3]"
        >
          Professional Web Design, Development & Marketing
        </h2>

        <p
          ref={paragraphRef}
          className="z-10 text-[1rem] font-[font6] leading-[1.4] px-10 max-w-3xl"
        >
          Your online presence matters. I specialize in{" "}
          <strong>custom-coded websites, WordPress & Shopify development, and strategic marketing</strong> to help businesses stand out.
          <br />
          Whether you need a high-converting landing page, a full-scale website,
          or powerful branding solutions, I'm here to turn your vision into reality.
        </p>

        <a
          href="https://www.fiverr.com/s/yvm0KrZ"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 mt-5 px-6 py-3 text-lg font-bold bg-white text-black rounded-full shadow-lg transition hover:bg-gray-300"
          aria-label="Hire me on Fiverr for web design, development, and marketing services"
        >
          Hire Me on Fiverr
        </a>
      </div>
    </section>
  );
};

export default Page11;
