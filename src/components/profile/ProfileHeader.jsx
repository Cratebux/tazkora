import { Bell, Plus, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileHeader = () => {
  return (
    <header className="flex w-full items-center justify-between py-6 lg:py-10">
      <Link href="/">
        <Image
          src="/svg/tazkora-white.svg"
          alt="tazkora logo"
          width={120}
          height={60}
        />
      </Link>

      <nav className="flex items-center justify-between text-white gap-4">
        <button className="flex size-10 items-center justify-center rounded-full bg-blue">
          <Plus />
        </button>

        <div className="flex items-center justify-between gap-4 rounded-full bg-teal p-2.5">
          <button className="flex size-10 items-center justify-center rounded-full bg-itembg">
            <Bell />
          </button>
          <button className="flex size-10 items-center justify-center rounded-full bg-itembg">
            <User />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default ProfileHeader;
