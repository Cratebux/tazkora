"use client";
import { handlePageRedirect } from "@/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const NavItem = ({ image, text, page, setSidebaropen }) => {
  return (
    <div
      onClick={() => handlePageRedirect(page, setSidebaropen)}
      className="flex cursor-pointer items-center gap-4 rounded-xl bg-itembg p-4"
    >
      <Image src={image} alt="icon" width={30} height={30} />
      <p className="text-lg font-semibold">{text}</p>
      {text !== "Log Out" && (
        <ChevronRight
          className="ml-auto h-full w-auto"
          width={32}
          height={32}
        />
      )}
    </div>
  );
};

export default NavItem;
