import React, { useRef } from "react";
import video from "../assets/videos/page3Video.mp4";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    gsap.from([taglineRef.current, headingRef.current, paragraphRef.current], {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: taglineRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div id="page3" className="h-screen bg-white p-4 max-sm:p-2">
      <div className="w-full h-full rounded-4xl overflow-hidden relative shadow-4-sided">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Background video showcasing creative digital work"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col justify-center text-white px-[10vw]">
          <div className="text-left">
            <span
              ref={taglineRef}
              className="font-[font4] text-[10vw] uppercase leading-[0.8]"
            >
              About
            </span>
          </div>

          <div className="text-center">
            <h2
              ref={headingRef}
              className="text-white text-2xl mb-3 uppercase font-[font3]"
            >
              CREATIVE VISION | STRATEGIC DESIGN | DIGITAL MASTERY
            </h2>
          </div>

          <div className="text-right max-w-2xl pt-10 self-end">
            <p
              ref={paragraphRef}
              className="text-lg lg:text-sm lg:pl-40 font-[font2]"
            >
              Design isn’t just what I do—it’s how I think. I blend graphic
              design, web development, and digital marketing to craft
              experiences that captivate, convert, and inspire. From social
              media graphics to SEO-driven websites, I turn ideas into impactful
              digital solutions. Every pixel, every line of code—designed for
              results. Let’s build something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
