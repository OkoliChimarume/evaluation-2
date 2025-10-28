import Phone from "./../assets/images/phone.webp";
import ArrowRight from "../assets/icons/arrow-right.svg";
import { useEffect, useState } from "react";

function Experts() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 400);
  }, []);

  return (
    <section className="section section2 lg:py-10 mx-3 xl:mx-24 lg:mx-8 lg:mt-10 flex justify-between items-center flex-wrap mx-auto rounded-[2rem]">
      <div className="p-6 lg:p-4 lg:pl-14 lg:w-[33.6rem]">
        <h2 className="text-4xl xl:text-5xl text-dark font-semibold">
          Easy. Diversified. Managed by{" "}
          <span className="text-teal-1">Experts.</span>
        </h2>
        <p className="text-light text-xl py-7">
          Explore an array of investment options that offer superior returns,
          curated and managed by experts, all from the comfort of your device.
          Simple, right?
        </p>
        <button
          type="button"
          className="bg-primary text-xs lg:text-md text-white flex items-center gap-2"
        >
          Start investing
          <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
        </button>
      </div>
      <div className=" pl-3 xl:pl-6 py-16">
        <img
          src={Phone}
          alt="phone"
          className={`transform transition-transform duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
export default Experts;
