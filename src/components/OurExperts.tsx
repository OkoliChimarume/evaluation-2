import { experts } from "../app-constants";

function OurExperts() {
  return (
    <section className="lg:py-20 lg:px-6 section m-4 xl:m-24 lg:m-8 flex flex-col lg:flex-row justify-between">
      <h2 className="text-3xl xl:text-5xl lg:w-[10ch] text-dark  mb-10">
        Meet the <span className="italic text-teal-1">Experts</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="text-center group transition-transform duration-300 ease-in-out"
          >
            <img
              src={expert.src}
              alt={expert.name}
              width="271"
              height="307"
              className="rounded-lg mx-auto mb-4 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
            />
            <h3 className="text-sm lg:text-2xl text-dark font-bold">
              {expert.name}
            </h3>
            <p className="text-xs text-light lg:text-xl">{expert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurExperts;
