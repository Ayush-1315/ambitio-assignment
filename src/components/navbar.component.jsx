import desktopLogo from "../assets/desktop-logo.png";
import mobileLogo from "../assets/mobile-logo.png";
import diamond from "../assets/diamond-logo.png";
import crown from "../assets/crown-logo.png";
import { useState } from "react";
const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  return (
    <div className="flex items-center justify-between w-full px-[1rem] py-3  md:py-5 xl:px-[3rem] lg:py-2  relative  h-[5rem]">
      <div>
        <img src={desktopLogo} alt="logo" className="hidden lg:inline-block" />
        <img src={mobileLogo} alt="logo" className="inline-block lg:hidden" />
      </div>
      <div className="hidden lg:flex gap-[1rem]">
        <span className="font-space-grotesk cursor-pointer lg:text-sm xl:text-base">
          Study-abroad{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#B1060F] inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span className="font-space-grotesk cursor-pointer lg:text-sm xl:text-base">
          Bootcamps{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#B1060F] inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span className="font-space-grotesk cursor-pointer lg:text-sm xl:text-base">
          Products{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#B1060F] inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span className="flex font-space-grotesk cursor-pointer items-center gap-2 lg:text-sm xl:text-base">
          <img src={diamond} alt="ambitio-pro" className="inline-block" />
          Ambitio Pro{" "}
        </span>
        <span className=" flex font-space-grotesk cursor-pointer items-center gap-2 lg:text-sm xl:text-base">
          <img src={crown} alt="ambitio-elite" className="inline-block" />
          Ambitio Elite{" "}
        </span>
      </div>
      <div
        className={`dropdown-menu ${
          showDropdown ? "show" : "hide"
        } flex flex-col xl:hidden gap-[1rem]`}
      >
        <span className="font-space-grotesk cursor-pointer text-right">
          Study-abroad
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#B1060F] inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span className="font-space-grotesk cursor-pointer text-right">
          Bootcamps
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#B1060F] inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span className="font-space-grotesk cursor-pointer text-right">
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#B1060F] inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span className="flex font-space-grotesk cursor-pointer items-center gap-2 text-right">
          <img src={diamond} alt="ambitio-pro" className="inline-block" />
          Ambitio Pro
        </span>
        <span className="flex font-space-grotesk cursor-pointer items-center gap-2 text-right">
          <img src={crown} alt="ambitio-elite" className="inline-block" />
          Ambitio Elite
        </span>
      </div>

      <div className="flex gap-3">
        <button
          className="flex border-2 border-[#B1060F] rounded-lg text-[#B1060F] py-1 px-3 hover:bg-[#B1060F] hover:text-white cursor-pointer  item-center gap-1 justify-center transition-all duration-500
"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 flex text-base items-center justify-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <span className="font-nunito-sans font-bold text-base justify-self-start text-xs">
            Speak with our Experts
          </span>
        </button>
        <svg
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer h-6 w-6 sm:h-7 sm:w-7 lg:hidden"
          onClick={() => setShowDropDown(!showDropdown)}
        >
          <path
            d="M5.81374 14.4638H23.8039M5.81374 8.46707H23.8039M11.8105 20.4605H23.8039"
            stroke="#B1060F"
            stroke-width="1.99891"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
