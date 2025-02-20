import React, { useRef } from "react";
import video from "../assets/videos/page10Video.mp4";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page10 = () => {
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    if (taglineRef.current && headingRef.current && paragraphRef.current) {
      gsap.from([taglineRef.current, headingRef.current, paragraphRef.current], {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: taglineRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section id="page10" className="relative h-screen bg-black p-4">
      <div className="page10In relative flex flex-col items-center justify-center h-full p-10 text-center rounded-4xl border-18 border-white overflow-hidden text-white">
        
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Content */}
        <h1
          ref={taglineRef}
          className="font-[font4] z-10 text-[7vw] uppercase leading-[0.8]"
          aria-label="Let's Connect & Grow Together"
        >
          🚀 Let’s Connect & Grow Together
        </h1>

        <h2
          ref={headingRef}
          className="z-10 text-2xl mb-3 uppercase font-[font3]"
        >
          Success is built on strong connections!
        </h2>

        <p
          ref={paragraphRef}
          className="z-10 text-[1rem] font-[font6] leading-[1.4] px-10 max-w-3xl"
        >
          Whether you're a business owner, entrepreneur, or creative professional, 
          LinkedIn is the perfect place to exchange ideas, collaborate on projects, 
          and stay ahead in the industry.
          <br />
          I specialize in <strong>web design, development, and marketing</strong>—helping 
          brands establish a powerful online presence. Let’s connect and explore 
          opportunities to <strong>create, innovate, and grow together!</strong>
        </p>

        {/* CTA Button */}
        <a
          href="https://www.linkedin.com/in/rahul-pal-61446a333/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 mt-5 px-6 py-3 text-lg font-bold bg-white text-black rounded-full shadow-lg transition hover:bg-gray-300"
          aria-label="Connect with Rahul Pal on LinkedIn"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Page10;