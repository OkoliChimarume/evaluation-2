import HeroImage from "./../assets/images/hero-image.webp";
import ArrowRight from "../assets/icons/arrow-right.svg";
import AppleIcon from "../assets/icons/apple.svg";
import GooglePlayIcon from "../assets/icons/google-play.svg";
import { useState } from "react";
import ArrowForward from "../assets/icons/arrow-forward.svg";
import investors from "../assets/images/investors.webp";
import CloseIcon from "../assets/icons/close.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-3">
      <section className="top-bar flex justify-between items-center xl:px-24 lg:px-8 py-3 lg:py-6">
        <a href="#">
          <img
            src="logo.webp"
            alt="rise logo"
            width={65}
            height={19}
            className="h-5"
          />
        </a>
        <section className="hidden lg:flex justify-between items-center w-[574px]">
          <nav>
            <a href="">Why Rise</a>
            <a href="">Blog</a>
            <a href="">Rise for Business</a>
          </nav>
          <div>
            <button type="button" className="bg-[#71879C0D] text-dark mr-2">
              Log In
            </button>
            <button type="button" className="bg-primary text-white">
              Get started
            </button>
          </div>
        </section>
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <img src="/menu-icon.svg" alt="Menu Icon" width="24" height="24" />
        </button>
      </section>
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 space-y-6 shadow-lg transition-transform transform translate-x-0">
          <div className="flex justify-between items-center">
            <img src="/logo.webp" alt="Rise logo" width={65} height={19} />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-700"
            >
              <img src={CloseIcon} alt="Close Menu" width="24" height="24" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-lg hover:text-primary">
              Why Rise
            </a>
            <a href="#" className="text-lg hover:text-primary">
              Blog
            </a>
            <a href="#" className="text-lg hover:text-primary">
              Rise for Business
            </a>
          </nav>
          <div className="flex flex-col gap-4">
            <button className="bg-gray-100 text-dark py-3 rounded-lg">
              Log In
            </button>
            <button className="bg-primary text-white py-3 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
      <section className="hero-content w-full mt-4 flex-wrap lg:mt-10 flex justify-between mx-auto">
        <section className="p-4 xl:pl-24 lg:pl-8">
          <div className=" xl:w-[33.6rem] lg:w-[27.6rem] xl:mt-14 lg:mt-2">
            <button className="mb-2 flex gap-2 text-xs text-teal-1 border border-teal-2 py-2 px-3 bg-teal-4">
              READ OUR COST OF LIVING REPORT 2024{" "}
              <img src={ArrowForward} alt="Arrow Right" width="7" height="13" />
            </button>
            <h1 className="text-4xl  mt-4 xl:text-6xl lg:text-5xl text-dark font-semibol">
              Dollar investments that help you{" "}
              <span className="text-teal-1">grow.</span>
            </h1>
            <p className="text-light text-xl py-7">
              Rise gives you access to a carefully selected portfolio of global
              investments, across US stocks, US real estate and fixed income
              assets.
            </p>
          </div>
          <div className="flex gap-1 lg:gap2">
            <button
              type="button"
              className="bg-primary text-xs lg:text-md text-white flex items-center gap-1 lg:gap2"
            >
              Start investing
              <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
            </button>
            <button
              type="button"
              className="bg-[#71879C0D] text-xs lg:text-md text-dark flex items-center gap-1 lg:gap2"
            >
              <img src={AppleIcon} alt="Apple Logo" width="18" height="18" />
              <span className="bg-neutral opacity- w-[1px] h-3"></span>
              <img
                src={GooglePlayIcon}
                alt="Google Play Logo"
                width="18"
                height="18"
              />
              Dowload app
            </button>
          </div>
          <div className="border rounded-lg p-5 mt-14 xl:mt-[10rem] lg:mt-[8rem]">
            <p className="text-light text-sm mb-1">Investors and Partners</p>
            <img
              src={investors}
              alt="Our investors"
              width="520"
              height="38"
              className="xl:w-[33.6rem] lg:w-[26.6rem]"
            />
          </div>
        </section>
        <section className="mt-14 lg:mt-0 xl:w-[36.6rem] lg:w-[27.6rem]">
          <img src={HeroImage} alt="plans" width={584} height={850} />
        </section>
      </section>
    </header>
  );
}
export default Header;
