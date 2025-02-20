import video from "../assets/videos/page8Video.mp4";

const Page8 = () => {
  return (
    <section
      id="page8"
      className="relative h-screen"
      aria-label="The Options section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/images/video-placeholder.jpg"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Overlay with Text */}
      <div className="absolute inset-0 border-[16px] max-sm:border-[13px] m-4 max-sm:m-2 border-white rounded-[2rem] flex items-center justify-center">
        <h1 className="text-white text-[20vw] font-[font4] text-center leading-[0.8] uppercase mix-blend-difference">
          THE <br /> OPTIONS
        </h1>
      </div>
    </section>
  );
};

export default Page8;