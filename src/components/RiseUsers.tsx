import ArrowRight from "../assets/icons/arrow-right-rounded.svg";
import ArrowLeft from "../assets/icons/arrow-left-rounded.svg";
import { useEffect, useRef, useState } from "react";
import PlayIcon from "../assets/icons/play.svg";
import { riseUsers } from "../app-constants";



function RiseUsers() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to scroll left or right
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Detect active image based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const newIndex = Math.round(scrollLeft / clientWidth);
        setActiveIndex(newIndex);
      }
    };

    const ref = scrollRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section px-6 xl:px-24 lg:px-8 mb-10 py-20">
      <h2 className="text-2xl text-center lg:text-left lg:text-4xl xl:text-5xl font-semibold mb-6">
        Meet Some <span className="italic text-teal-1">Rise Users</span>
      </h2>
      {/* larger screens */}
      <section className="hidden lg:flex gap-6">
        {riseUsers.map((img) => (
          <div
            key={img.id}
            className="relative rounded-2xl overflow-hidden cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.name}
              width={388}
              height={272}
              className="h-[17rem]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <img src={PlayIcon} alt="Play" />
            </div>
            <p className="absolute bottom-2 left-2 text-white font-medium">
              {img.name}
            </p>
          </div>
        ))}
      </section>

      <section className="flex flex-col lg:hidden relative w-full max-w-md mx-auto">
        {/* Image Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {riseUsers.map((img) => (
            <div key={img.id} className="min-w-full snap-center relative">
              <img
                src={img.src}
                alt={img.name}
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button>
                  <img src={PlayIcon} alt="Play" />
                </button>
              </div>
              <p className="absolute bottom-2 left-2 text-white font-medium">
                {img.name}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex justify-center space-x-2">
            {riseUsers.map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  activeIndex === index ? "bg-black" : "bg-gray-400"
                } transition-all duration-300`}
              ></span>
            ))}
          </div>

          {/* Navigation Arrows */}
          <span className="flex gap-5">
            <button onClick={() => scroll("left")}>
              <img src={ArrowLeft} alt="Left" />
            </button>
            <button onClick={() => scroll("right")}>
              <img src={ArrowRight} alt="Right" />
            </button>
          </span>
        </div>
      </section>
    </section>
  );
}
export default RiseUsers;
