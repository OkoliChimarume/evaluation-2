import Flag1 from "./../assets/images/flag1.webp";
import Flag2 from "./../assets/images/flag2.webp";
import Flag3 from "./../assets/images/flag3.webp";
import Flag4 from "./../assets/images/flag4.webp";
import Flag5 from "./../assets/images/flag5.webp";

function OurNumbers() {
  return (
    <section className="section text-center my-10 py-10 px-4">
      <h2 className="text-2xl text-dark lg:text-5xl font-semibold">
        See our <span className="text-teal-1 italic">numbers</span>
      </h2>

      <div className="flex flex-row flex-wrap justify-center items-center gap-3 lg:gap-10 mt-6">
        <div className="text-center p-3 lg:p-6 flex flex-col gap-4 lg:gap-6">
          <p className="text-3xl text-dark lg:text-6xl font-medium">300k +</p>
          <p className="text-teal-1 text-base lg:text-2xl">Users</p>
        </div>

        <div className="text-center p-3 lg:p-6 flex flex-col gap-4 lg:gap-6">
          <p className="text-3xl text-dark lg:text-6xl font-medium">$42 m +</p>
          <p className="text-teal-1 text-base lg:text-2xl">
            Payed out to users
          </p>
        </div>

        <div className="text-center p-3 lg:p-6 gap-4 lg:gap-6 flex flex-col">
          <span className="flex items-center">
            <p className="text-3xl text-dark lg:text-6xl font-medium">5</p>
            <div className="flex items-center -space-x-12 mt-1">
              <img src={Flag1} alt="Flag 1" width={70} height={20} />
              <img src={Flag2} alt="Flag 2" width={70} height={20} />
              <img src={Flag3} alt="Flag 3" width={70} height={20} />
              <img src={Flag4} alt="Flag 4" width={70} height={20} />
              <img src={Flag5} alt="Flag 5" width={70} height={20} />
            </div>
          </span>

          <p className="text-teal-1 text-dark text-base lg:text-2xl mt-1">
            Countries
          </p>
        </div>
      </div>
    </section>
  );
}
export default OurNumbers;
