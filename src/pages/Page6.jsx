import React, { useRef } from "react";
import bgImage from "../assets/images/page6Img.webp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: taglineRef.current,
        start: "top 85%",
        end: "top 60%",
        scrub: 1,
      },
    });

    tl.from(taglineRef.current, { y: 100, opacity: 0, duration: 1, ease: "power2.out" })
      .from(headingRef.current, { y: 100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
      .from(paragraphRef.current, { y: 100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5");
  }, []);
  
  return (
    <section
      id="page6"
      className="h-screen bg-white p-4 max-sm:p-2"
      aria-label="Influence and Marketing Strategy"
    >
      <div
        className="w-full h-full rounded-4xl bg-cover bg-center flex overflow-x-hidden shadow-4-sided"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Main Content */}
        <div className="main w-[50%] max-lg:w-[100%] flex flex-col items-center p-20 justify-center gap-[20px]">
          <h1
            ref={taglineRef}
            className="font-[font4] text-white text-[10vw] uppercase leading-[0.8]"
          >
            Influence
          </h1>
          <h2
            ref={headingRef}
            className="text-white text-2xl mb-3 uppercase font-[font3] text-center"
          >
            Marketing That Connects, Inspires, and Converts.
          </h2>
          <p
            ref={paragraphRef}
            className="text-white text-[1rem] font-[font6] leading-[1.2] text-center px-10"
          >
            Marketing isn’t just about visibility—it’s about influence. Our
            strategic campaigns turn brands into voices that engage and inspire
            the right audience.
          </p>
        </div>

        {/* Empty Div for Layout (Consider Removing If Not Needed) */}
        <div className="h-full w-[50%] max-lg:w-0"></div>
      </div>
    </section>
  );
};

export default Page6;