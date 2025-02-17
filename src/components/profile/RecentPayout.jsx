import Image from "next/image";
import React from "react";
import menuBoard from '../../../public/svg/menu-board.svg'

const RecentPayout = () => {
  return (
    <>
      <div className="flex items-center gap-5 text-white pt-10">
        <h1 className="lg:text-[2rem] text-[1rem] font-semibold">Recent Payouts</h1>
        <p className="text-[1rem]">view all</p>
      </div>

      <div className="lg:w-[600] w-full h-[186] bg-itembg flex flex-col mt-5 items-center rounded-lg justify-center ">
        <Image
            src={menuBoard}
            alt="menuBoard"
            className="object-cover"
        />
        <p className="opacity-50 pt-10 lg:text-[1rem] text-[.7rem]">No payouts yet. Complete tasks to earn rewards.</p>
      </div>
    </>
  );
};

export default RecentPayout;
