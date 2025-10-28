import CommunityImg from "./../assets/images/community.webp";
import ArrowRight from "../assets/icons/arrow-right.svg";

function OurCommunity() {

  return (
    <section className="section bg-teal-1 lg:pt-10 xl:mx-24 lg:mx-8 lg:mt-20 flex justify-between flex-wrap lg:flex-nowrap lg:rounded-[2rem]">
      <div className="p-6 lg:pb-10 lg:p-4 lg:pl-14 lg:w-[33.6rem]">
        <h2 className="text-3xl xl:text-4xl text-white font-semibold">
          Join the Rise Community
        </h2>
        <p className="text-white text-xl lg:text-lg py-7">
          Our Telegram community surrounds you with others who can help you
          along your financial journey with tips, advice and learning. It's
          completely free and open to new and seasoned investors.
        </p>
        <button
          type="button"
          className="border border-teal-2 text-xs lg:text-md text-white flex items-center gap-2"
        >
          Join our community
          <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
        </button>
      </div>
      <div className="pt-[6.3rem]">
        <img
          src={CommunityImg}
          alt="community image"
          width="779"
          height="194"
        />
      </div>
    </section>
  );
}
export default OurCommunity;
