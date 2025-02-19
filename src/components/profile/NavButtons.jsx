"use client";
import { handlePageRedirect } from "@/utils";
import Image from "next/image";

const NavButtons = ({ setSidebaropen }) => {
  return (
    <>
      <button
        onClick={() => handlePageRedirect("/profile/payout", setSidebaropen)}
        className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#393C4D] p-2 py-3 text-[#BBBCC2]"
      >
        Payout
      </button>

      <button
        onClick={() =>
          handlePageRedirect("/profile/fund-wallet", setSidebaropen)
        }
        className="flex w-full items-center justify-center gap-1.5 rounded-full border border-[#BBBCC2] p-2 py-3 text-[#BBBCC2]"
      >
        Fund Wallet
        <Image src="/svg/wallet.svg" alt="icon" width={20} height={20} />
      </button>
    </>
  );
};

export default NavButtons;
