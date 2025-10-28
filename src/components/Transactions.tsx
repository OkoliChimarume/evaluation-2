import Transaction from "./../assets/images/transaction.webp";
import ArrowRight from "./../assets/icons/arrow-right-teal.svg";

function Transactions() {
  return (
    <section className="section mx-4 xl:mx-24 lg:mx-8  mb-14 lg:mb-0 lg:mt-10 flex justify-between items-center flex-wrap lg:flex-nowrap">
      <img src={Transaction} alt="Flag 1" width="560" height="20" />
      <div className="p-6 lg:p-4 lg:pl-14 lg:w-[33.6rem]">
        <h2 className="text-3xl xl:text-5xl text-dark font-semibold">
          Make transactions online with{" "}
          <span className="text-teal-1 italic">ease.</span>
        </h2>
        <p className="text-light text-xl py-7">
          With the Rise US virtual card, you can pay for your subscriptions,
          shop online and enjoy a monthly transaction limit of up to $10,000.
        </p>
        <button
          type="button"
          className="bg-[#71879C0D] text-xs lg:text-md text-teal-1 flex items-center gap-2"
        >
          Request for your US virtual card
          <img src={ArrowRight} alt="Arrow Right" width="13" height="13" />
        </button>
      </div>
    </section>
  );
}
export default Transactions;
