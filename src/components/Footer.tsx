import ArrowRightPrimary from "./../assets/icons/arrow-right-teal.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import AppleIcon from "../assets/icons/apple-white.svg";
import GooglePlayIcon from "../assets/icons/google-play-white.svg";
import Ndpr from "./../assets/images/ndpr.webp";
import Rise from "./../assets/images/rise.webp";
import { footerSocialLinks } from "../app-constants";

function Footer() {
  return (
    <section className="">
      <Newsletter />
      <div className="bg-primary w-full text-white">
        <footer className="max -mt-[7rem] lg:-mt-[5rem] px-6 pt-[12rem] lg:px-24">
          <div className="grid md:grid-cols-2 items-start pb-16 lg:grid-cols-[auto,1fr,auto] gap-8 xl:gap-12">
            <div className="">
              <div>
                <img
                  src="logo-white.webp"
                  alt="rise logo"
                  width={65}
                  height={19}
                  className="h-5"
                />
                <p className="text-xs mt-3 md:max-w-[10rem] mb-4">
                  Global dollar investments <br /> made simple.
                </p>
              </div>
              <a className="">
                <img src={Ndpr} alt="rise logo" className="" />
              </a>
            </div>
            <div className="flex flex-col gap-5 lg:order-1">
              <button
                type="button"
                className="w-[20rem] justify-center md:p-3 lg:w-fit bg-teal-2 text-sm lg:text-md text-white flex items-center gap-2"
              >
                <img src={AppleIcon} alt="Apple Logo" width="18" height="18" />
                <span className="bg-white opacity-50 w-[1px] h-3"></span>
                <img
                  src={GooglePlayIcon}
                  alt="Google Play Logo"
                  width="18"
                  height="18"
                />
                Dowload app
              </button>
              <button
                type="button"
                className="bg-primary px-6 w-[20rem] md:p-3 justify-center lg:w-fit border border-teal-4 text-sm lg:text-md text-white flex items-center gap-2"
              >
                Start investing
                <img
                  src={ArrowRight}
                  alt="Arrow Right"
                  width="13"
                  height="13"
                />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 ">
              {/* Company Links */}
              <div>
                <h3 className="font-bold">Company</h3>
                <ul className="mt-2 space-y-3 text-sm">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>

              {/* Explore Links */}
              <div>
                <h3 className="font-bold">Explore</h3>
                <ul className="mt-2 space-y-3 text-sm">
                  <li>
                    <a href="#">Why Rise</a>
                  </li>
                  <li>
                    <a href="#">Rise for Business</a>
                  </li>
                  <li>
                    <a href="#">Investment Club</a>
                  </li>
                  <li>
                    <a href="#">Developer</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>

              {/* Legal & Contact */}
              <div>
                <h3 className="font-bold">Legal</h3>
                <ul className="mt-2 space-y-3 text-sm">
                  <li className="">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Disclosure</a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold mt-10 lg:mt-0">Contact us</h3>
                <p className="text-sm mt-2">+234 01 888 3519</p>
                <p className="text-sm">+234 01 888 3519</p>
                <p className="text-sm">hello@risevest.com</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-[1fr,auto] text-base w-full items-center text-teal-3 overflow-hidden">
            <p className="flex mt-4 smMax:justify-between smMax:w-full md:lgMax:col-span-full lgMax:order-1 gap-2 text-sm">
              <span className="smMax:order-1">©2025 Risevest. </span>
              <span> All rights reserved.</span>
            </p>
            <ul className="flex mdMax:-order-1 mdMax:mt-16 gap-6 flex-shrink-0 max-w-full flex-wrap font-medium">
              {footerSocialLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex gap-1 items-center md:text-sm"
                    >
                      <img
                        src={link.icon}
                        alt="rise Logo"
                        width="full"
                        className=""
                      />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <img src={Rise} alt="rise Logo" width="full" className="mt-10" />
        </footer>
      </div>
    </section>
  );
}
export default Footer;
function Newsletter() {
  return (
    <section className="bg-teal-2 mt-10 rounded-lg lg:rounded-2xl p-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center mx-6 lg:mx-auto max-w-[75rem] relative overflow-hidden">
      <div className="text-white mb-6 lg:mb-0">
        <h2 className="text-2xl font-bold">Weekly newsletter</h2>
        <p className="text-lg">
          Sign up for our weekly newsletter for fun, finance and more
        </p>
      </div>

      <form className="flex flex-col gap-3 w-full lg:w-auto">
        <div className="flex gap-1 flex-col lg:flex-row">
          <label className="flex items-center px-2">
            <span className="sr-only">First name</span>
            <input
              type="text"
              name="first_name"
              required
              title="Enter first name"
              className="rounded-full lg:rounded-r-none p-4 w-full lg:min-w-[16rem] outline-none placeholder-white text-white bg-teal-1"
              placeholder="First name"
            />
          </label>
          <label className="flex items-center px-2">
            <span className="sr-only">Last name</span>
            <input
              type="text"
              name="last_name"
              required
              title="Enter last name"
              className="rounded-full lg:rounded-l-none p-4 w-full lg:min-w-[16rem] outline-none placeholder-white text-white bg-teal-1"
              placeholder="Last name"
            />
          </label>
        </div>
        <div className="flex justify-between items-center gap-3 rounded-full p-3 bg-teal-1 w-full">
          <label className="flex items-center px-2">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              name="email"
              required
              title="Enter a valid email address"
              className=" outline-none placeholder-white text-white bg-transparent"
              placeholder="Email address"
            />
          </label>
          <button
            type="submit"
            className="bg-white text-teal-1 rounded-full p-2 flex items-center justify-center w-10 h-8"
          >
            <img
              src={ArrowRightPrimary}
              alt="Arrow Right"
              width="12"
              height="8"
            />
          </button>
        </div>
      </form>
    </section>
  );
}
