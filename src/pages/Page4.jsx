import video from "../assets/videos/page4Video.mp4";

const Page4 = () => {
  return (
    <div id="section4" className="relative h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        loading="lazy"
        aria-hidden="true"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay with Text */}
      <div className="absolute inset-0 border-[16px] max-sm:border-[13px] m-4 max-sm:m-2 border-white rounded-[2rem] flex items-center justify-center">
        <h1 className="text-white text-[20vw] font-[font4] text-center leading-[0.8] uppercase mix-blend-difference">
          THE <br /> FOCUS
        </h1>
      </div>
    </div>
  );
};

export default Page4;
