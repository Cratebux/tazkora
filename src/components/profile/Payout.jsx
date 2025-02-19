import { ArrowLeft } from "lucide-react";

const Payout = () => {
  return (
    <div className="pb-10">
      <div className="flex gap-5 pb-5">
        <ArrowLeft />
        <p>Back</p>
      </div>
      <h1 className="font-bold lg:text-[2rem]">Payout</h1>

      <div className="pt-10">
        <h1 className="font-bold lg:text-[2rem]">Withdraw to Bank</h1>
        <div className="grid gap-5">
          <p className="text-[.8rem] pt-3 opacity-50">
            Available balance is: ₦8,860.37
          </p>
          <p className="text-[.8rem] opacity-50">
            Use the form below to withdraw instantly.
          </p>
          <p className="text-bold text-[.8rem] pt-2 font-bold">
            Amount to withdraw for now (minimum: ₦5,000.000)
          </p>
        </div>
        <input
          className="mt-2 w-[370] rounded bg-itembg p-5 text-white opacity-40 outline-none"
          placeholder="e.g 5000"
        />
        <p className="text-bold text-[.8rem] py-3 font-bold">
            Check Destination
          </p>
        <div>
          <div className="flex w-full items-center rounded-lg bg-itembg p-5 lg:w-[370]">
            <h1>Wema Bank - 025392660</h1>
          </div>

          <button className="mt-10 w-[370] rounded-lg bg-blue py-3 text-center text-white">
            WITHDRAW NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payout;
