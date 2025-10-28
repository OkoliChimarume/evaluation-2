import ArrowRight from "../assets/icons/arrow-right.svg";
import BlogImg1 from "../assets//images/blog-img1.webp";
import BlogImg2 from "../assets//images/blog-img2.webp";
import BlogImg3 from "../assets//images/blog-img3.webp";

function OurBlog() {
  return (
    <section className="py-20 mt-20 section py-5 lg:py-0 mx-4 xl:px-24 lg:px-8 mb-14 lg:mb-0 lg:mt-10 flex justify-between flex-wrap">
      <div className="lg:p-4 lg:pl-4 lg:w-[30.6rem]">
        <h2 className="text-3xl xl:text-5xl text-dark font-semibold">
          Get smarter about your money.
        </h2>
        <p className="text-light text-xl py-7">
          The latest news, market insight and everything you need to know about
          managing your money.
        </p>
        <button
          type="button"
          className="bg-primary hidden text-xs lg:text-md text-white lg:flex items-center gap-2"
        >
          Read the blog
          <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
        </button>
      </div>
      <div className="bg-[#5E7387] hidden lg:block opacity-50 w-[2px] h-[25rem]"></div>
      <div className="grid grid-cols-1 gap-6 xl:gap-10 lg:w-[28.6rem]">
        <article className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
          <img
            src={BlogImg2}
            alt="May Portfolio Report"
            width="104"
            height="104"
          />
          <div>
            <h3 className="text-base font-tomato">May Portfolio Report</h3>
            <p className="text-light text-lg">
              Rise has added YouTube to its stocks portfolio growth.
            </p>
          </div>
        </article>

        <article className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
          <img src={BlogImg1} alt="User Stories" width="104" height="104" />
          <div>
            <h3 className="text-base font-tomato">User Stories</h3>
            <p className="text-light text-lg">
              Rise has added YouTube to its stocks portfolio growth.
            </p>
          </div>
        </article>

        <article className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
          <img src={BlogImg3} alt="Update" width="104" height="104" />
          <div>
            <h3 className="text-base font-tomato">Update</h3>
            <p className="text-light text-lg">
              Rise has added YouTube to its stocks portfolio growth.
            </p>
          </div>
        </article>
      </div>
      <button
        type="button"
        className="bg-primary text-xs mt-10 lg:text-md text-white flex lg:hidden items-center gap-2"
      >
        Read the blog
        <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
      </button>
    </section>
  );
}
export default OurBlog;
