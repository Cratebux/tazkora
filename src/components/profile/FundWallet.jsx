"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import masterCard from "../../../public/svg/master_card_tiny.png.svg";
import piggyBank from "../../../public/svg/piggybank_guide.png.svg";
import { useContext, useState } from "react";
import { WalletContext } from "@/app/context/WalletContent";
import { Loader2 } from "lucide-react";

const FundWallet = () => {
  const [amount, setAmount] = useState();
  const { url, deposit, isLoading } = useContext(WalletContext);
  

  return (
    <div className="pb-10">
      <h1 className="font-bold lg:text-[2rem]">Fund Wallet</h1>
      <div className="grid pt-10">
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
          onClick={() => {
            deposit();
          }}
          className="mt-5 w-full rounded-lg bg-blue py-3 text-center text-white lg:w-[370]"
        >
          {isLoading ? (
            <div className="flex justify-center gap-3">
              <Loader2 className="animate-spin" />
              <p>Please wait</p>
            </div>
          ) : (
            <p>Proceed</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default FundWallet;
