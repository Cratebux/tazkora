"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import masterCard from "../../../public/svg/master_card_tiny.png.svg";
import piggyBank from "../../../public/svg/piggybank_guide.png.svg";
import { useContext, useState } from "react";
import { WalletContext } from "@/app/context/WalletContent";

const FundWallet = () => {
  const [amount, setAmount] = useState();
  const { url, deposit } = useContext(WalletContext);

  return (
    <div className="pb-10">
      <h1 className="font-bold lg:text-[2rem]">Fund Wallet</h1>
      <div className="pt-10 grid">
        <p>Tap here & enter.. (e.g 5000)</p>
        <input
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="mt-2 w-full rounded bg-itembg p-3 text-white opacity-40 outline-none lg:w-[370] lg:p-5"
          placeholder="Tab here $ enter.. (e.g 5000)"
        />
        {/* <div>
          <h1 className="py-5 font-bold lg:text-[2rem]">
            Select Payment Option
          </h1>
          <div className="grid gap-5">
            <div className="flex w-full items-center gap-3 rounded-lg bg-itembg p-3 lg:w-[370] lg:p-5">
              <Image src={masterCard} />
              <p>Use a new Card</p>
            </div>
            <div className="flex w-full items-center gap-3 rounded-lg bg-itembg p-3 lg:w-[370] lg:p-5">
              <Image src={piggyBank} />
              <p>Pay with bank</p>
            </div>
          </div> */}

        {/* </div> */}
          <button
            onClick={() => {deposit(amount)}}
            className="mt-5 w-full rounded-lg bg-blue py-3 text-center text-white lg:w-[370]"
          >
            Proceed
          </button>
      </div>
    </div>
  );
};

export default FundWallet;
