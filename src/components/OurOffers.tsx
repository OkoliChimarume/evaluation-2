import { offers } from "../app-constants";
import ArrowRight from "../assets/icons/arrow-right-dark.svg";

function OurOffers() {
  return (
    <div
      className="mx-4 lg:mx-0 my-20"
      style={{
        gridTemplateRows: `repeat(${offers.length}, 1fr)`,
      }}
    >
      {offers.map((offer, index) => (
        <section
          key={offer.id}
          className={`sticky w-full top-[calc(7%+var(--plan-offset))]`}
          style={{
            // @ts-ignore
            "--plan-offset": `${index * 2.3}rem`,
          }}
        >
          <div className="relative h-full">
            <div
              className={`section px-6 py-5 lg:py-0 xl:mx-24 lg:mx-8  mb-14 lg:mb-0 lg:mt-10 flex justify-between items-center flex-wrap lg:flex-nowrap mx-auto rounded-[2rem] ${offer.bg}`}
            >
              <div className="py-3 lg:p-4 lg:pl-4 lg:w-[33.6rem]">
                <h2 className="text-2xl xl:text-5xl text-dark font-semibold">
                  {offer.title}
                </h2>
                <p className="text-light text-xl py-7">{offer.description}</p>
                <button
                  type="button"
                  className="bg-[#71879C0D] text-xs lg:text-md text-neutral flex items-center gap-2"
                >
                  {offer.btn}
                  <img
                    src={ArrowRight}
                    alt="Arrow Right"
                    width="13"
                    height="13"
                  />
                </button>
              </div>
              <div className="lg:py-2 lg:mr-20">
                <img src={offer.image} alt="phone" className="" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
export default OurOffers;
