import image from "../assets/hero-image.png";
import crown from "../assets/hero-crown.png";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Ambitio";
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full h-[35vh] sm:h-[50vh] lg:m-auto bg-no-repeat bg-center bg-[length:250%] sm:bg-[length:180%] md:bg[length:180%] lg:bg-contain mb-5 animate-spin-slow carousel"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-white/50 rounded-full blur-lg"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/50 rounded-full blur-lg"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/50 rounded-full blur-lg"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/50 rounded-full blur-lg"></div>
        </div>
        <img
          src={crown}
          alt="crown"
          className="tw-animate-shake absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] md:w-[200px] lg:w-[240px] hovering-image"
        />
      </div>
      <div className="motion-translate-x-in-[0%] motion-translate-y-in-[-17%] motion-infinite"></div>
      <div className="p-2 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-clash text-3xl lg:text-3xl font-semibold text-center">
          <span className="block sm:inline">Give the best</span>{" "}
          <span className="block sm:inline">
            shot at your <br className="hidden sm:inline" />
          </span>{" "}
          <span className="bg-gradient-to-r from-[#B10612] via-[#8A0007] to-[#B10612] text-transparent bg-clip-text font-bold">
            Dream University
          </span>
        </h1>

        <p className="font-nunito-sans text-center text-sm w-[85%] sm:w-[60%]  ">
          <span className="text-[#696969]">
            Get expert help, personalised guidance, and all the support you need
            to
          </span>{" "}
          <span className="font-bold">
            increase your chances of success with Ambitio Elite.
          </span>
        </p>
        <span className="font-nunito-sans bg-[#212121] text-[#FFFFFF] py-2 px-6 rounded-xl cursor-pointer">
          10x your chances with Ambitio
        </span>
      </div>
      <div className="m-4 rounded-md p-10  bg-[linear-gradient(135deg,rgba(255,0,0,0.1),rgba(255,0,0,0.2)),radial-gradient(circle_at_center,rgba(255,0,0,0.15)_10%,transparent_70%)] bg-blend-screen w-[90%] mb-10">
        <div>
          <p className="font-space-grotesk font-semibold text-2xl lg:text-3xl text-center">
            We let <span className="text-[#B1060F]">our numbers</span> do the
            talking
          </p>
          <p className="font-nunito-sans text-[#696969] text-center">
            Our users love us and we know you will to! Explore our products .
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 sm:flex-row justify-center sm:items-start p-10 xl:gap-15">
          <div className="hover:scale-[1.05] transition-all duration-400">
            <p className="text-center font-space-grotesk font-bold text-4xl text-[#B1060F] mb-2 md:text-5xl lg:text-6xl">
              4.96
            </p>
            <p className="text-center font-space-grotesk text-[#696969]">
              Google Rating
            </p>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-400">
            <p className="text-center font-space-grotesk font-bold text-4xl text-[#B1060F] mb-2 md:text-5xl lg:text-6xl">
              98.2%
            </p>
            <p className="text-center font-space-grotesk text-[#696969]">
              got into their Target Program
            </p>
          </div>
          <div className="hover:scale-[1.05] transition-all duration-400">
            <p className="text-center font-space-grotesk font-bold text-4xl text-[#B1060F] mb-2 md:text-5xl lg:text-6xl">
              30,000+
            </p>
            <p className="text-center font-space-grotesk text-[#696969]">
              students Assisted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
