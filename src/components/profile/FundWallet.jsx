import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import masterCard from "../../../public/svg/master_card_tiny.png.svg";
import piggyBank from "../../../public/svg/piggybank_guide.png.svg";

const FundWallet = () => {
  return (
    <div className="pb-10">
      <h1 className="lg:text-[2rem] font-bold">Fund Wallet</h1>
      <div className="pt-10">
        <p>Tap here & enter.. (e.g 5000)</p>
        <input
          className="mt-2 w-[370] rounded bg-itembg p-5 text-white opacity-40 outline-none"
          placeholder="Tab here $ enter.. (e.g 5000)"
        />
        <div>
          <h1 className="lg:text-[2rem] font-bold py-5">Select Payment Option</h1>
          <div className="grid gap-5">
            <div className="flex lg:w-[370] w-full items-center gap-3 rounded-lg bg-itembg p-5">
              <Image src={masterCard} />
              <p>Use a new Card</p>
            </div>
            <div className="flex lg:w-[370] w-full items-center gap-3 rounded-lg bg-itembg p-5">
              <Image src={piggyBank} />
              <p>Pay with bank</p>
            </div>
          </div>

          <button className="w-[370] mt-10 rounded-lg bg-blue py-3 text-center text-white">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
