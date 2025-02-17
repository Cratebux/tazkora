import Image from "next/image";
import React from "react";
import warning from '../../../public/svg/!.svg'

const MyReward = () => {
  return (
    <>
      <div className="text-white flex gap-5 items-center">
        <h1 className="lg:text-[2rem] text-[1rem] font-semibold">My Rewards</h1>
        <p className="text-[1rem]">view all</p>
      </div>
      <div className="bg-itembg rounded mt-5 flex lg:gap-5 gap-2 w-max text-white opacity-50 items-center px-3 py-2">
        <Image
          src={warning}
          alt="warning"
        />
        <p className="lg:text-[1rem] text-[.7rem]">Expect your rewards within 72 hours of completing the task.</p>
      </div>

      <div className="pt-5 lg:flex gap-10 grid ">
        <div className="grid bg-itembg p-5 rounded w-[282] h-[131]">
            <h1>Tazkora</h1>
            <p className="font-bold">Earn for watching YouTube</p>
            <p className="opacity-50 text-[.8rem]">Reward issued 23 January 2025</p>
            <p className="font-bold pt-2">₦100.00</p>
        </div>
        <div className="grid bg-itembg p-5 rounded w-[282] h-[131]">
            <h1>Tazkora</h1>
            <p className="font-bold">Follow RT3 on X!</p>
            <p className="opacity-50 text-[.8rem]">Reward issued 23 January 2025</p>
            <p className="font-bold pt-2">₦100.00</p>
        </div>
      </div>
    </>
  );
};

export default MyReward;
