import { Copy } from "lucide-react";
import { Settings } from "lucide-react";
import { Pencil } from "lucide-react";
import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";
import NavButtons from "./NavButtons";
import { handlePageRedirect } from "@/utils";

const ProfileSideBar = ({ setSidebaropen }) => {
  return (
    <div className="py-6 lg:pt-0 w-full space-y-3 lg:block lg:w-[28%]">
      <div className="space-y-3 rounded-xl bg-itembg px-5 py-4">
        <div className="mb-14">
          <div className="relative z-[1] mb-6 pb-4">
            <div className="profile absolute bottom-0 left-0 right-0 top-0 -z-[2]"></div>
            <div className="flex justify-between text-[#A0A2A9]">
              <Link
                href="/profile/premium"
                onClick={() => handlePageRedirect("", setSidebaropen)}
              >
                <b>Basic</b>
              </Link>
              <Link
                href="/profile/settings"
                onClick={() => handlePageRedirect("", setSidebaropen)}
              >
                <Settings />
              </Link>
            </div>

            <div className="relative mx-auto aspect-square w-[30%] rounded-full border-2">
              <Image
                className="h-full w-full rounded-full"
                src="/images/avatar.png"
                alt="profile pic"
                width={70}
                height={70}
              />

              {/* w-[40px] min-w-[35px] */}
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-blue px-3 py-1">
                <Camera />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <p className="text-xl font-semibold">riderezzy</p>
              <Pencil className="text-[#A0A2A9]" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#393C4D] py-2">
            <div>
              <p>f60e3e15-2b34-42ef-b484-…</p>
              <p>My Account ID</p>
            </div>

            <Copy className="text-[#A0A2A9]" />
          </div>

          <div className="space-y-3 border-t border-[#393C4D] py-2">
            <div className="flex items-end justify-between">
              <p className="text-xl font-semibold">My earnings</p>
              <p className="text-2xl font-semibold">₦1,400.00</p>
            </div>

            <div className="mb-4 h-1.5 w-full rounded-full bg-[#335D35]">
              <div
                className="h-1.5 rounded-full bg-[#66BB6A]"
                style={{ width: "5%" }}
              ></div>
            </div>

            <p className="text-sm">
              Minimum payout amount: <b>₦5,000.00</b>{" "}
            </p>
          </div>
        </div>

        <NavButtons setSidebaropen={setSidebaropen} />
      </div>

      <div className="space-y-2">
        {[
          { image: "/svg/rewards.svg", text: "My Rewards", page: "/profile" },
          {
            image: "/svg/linked-account.svg",
            text: "Linked Accounts",
            page: "/profile/linked-account",
          },
          {
            image: "/svg/wallet.svg",
            text: "My Wallet",
            page: "/profile/my-wallet",
          },
          {
            image: "/svg/activity.svg",
            text: "My Activity",
            page: "/profile/my-activities",
          },
          { image: "/svg/log-out.svg", text: "Log Out", page: "" },
        ].map(({ image, text, page }) => (
          <NavItem
            key={text}
            image={image}
            text={text}
            page={page}
            setSidebaropen={setSidebaropen}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSideBar;
