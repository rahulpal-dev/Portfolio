import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import video from "../assets/videos/page9Video.mp4";

const services = [
  {
    title:
      "Creative and Impactful Graphic Design for Branding, Social Media, and Marketing",
    description:
      "I design high-quality visuals that make an impact. Whether it’s YouTube thumbnails, engaging social media posts, website banners, UI/UX elements, or complete brand identities, I create graphics that capture attention and communicate your message effectively.",
  },
  {
    title:
      "Result-Driven Digital Marketing Strategies to Boost Your Online Presence",
    description:
      "I specialize in digital marketing strategies that increase visibility and drive engagement. From SEO, keyword research, and ads to content marketing, I help brands attract the right audience.",
  },
  {
    title:
      "Custom Coded Websites and Optimized Web Solutions for Businesses and E-commerce",
    description:
      "I build fully coded websites that are fast, responsive, and designed to convert. Using React, WordPress, or Shopify, I ensure high-performance, SEO-friendly structures for your business.",
  },
];

const Page9 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef(null);
  const headingRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      gsap.fromTo(
        slideRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
      );
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    };

    animateText();

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isPaused]);

  const handleManualSlide = (direction) => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % services.length
        : (prev - 1 + services.length) % services.length
    );
  };

  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div
      id="page9"
      className="relative p-4 h-screen flex flex-col items-center justify-center bg-white z-10 overflow-hidden"
      onClick={togglePause}
    >
      <div className="relative w-full h-full border-4 rounded-4xl border-white flex items-center justify-center p-4 md:p-10 overflow-hidden shadow-4-sided">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Service Content */}
        <div ref={slideRef} className="relative text-center">
          <h2
            ref={headingRef}
            className="font-[font4] px-[10%] uppercase text-6xl md:text-8xl font-bold text-white leading-tight"
          >
            {services[currentIndex].title}
          </h2>
          <p className="font-[font6] italic text-white text-lg mt-4 leading-relaxed">
            {services[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 flex space-x-6">
        <button
          onClick={() => handleManualSlide("prev")}
          className="border-2 border-white text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-gray-900 transition"
        >
          ❮
        </button>
        <button
          onClick={() => handleManualSlide("next")}
          className="border-2 border-white text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-gray-900 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Page9;