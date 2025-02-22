"use client";
import { Bell, Plus, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import CreatePostDialog from "./CreatePostDialog";
import NotificationDrawer from "../NotificationDrawer";

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="flex w-full items-center justify-between py-4 lg:py-6">
      <Link href="/">
        <Image
          src="/svg/tazkora-white.svg"
          alt="tazkora logo"
          width={120}
          height={60}
        />
      </Link>

      <nav className="flex items-center justify-between gap-4">
        <Dialog className="rounded-full">
          <DialogTrigger className="flex size-8 items-center justify-center rounded-full bg-blue lg:size-10">
            <Plus />
          </DialogTrigger>

          <CreatePostDialog />
        </Dialog>

        <div className="flex items-center justify-between gap-4 rounded-full bg-teal p-2">
          <button
            onClick={() => setIsOpen(true)}
            className="flex size-7 items-center justify-center rounded-full bg-itembg lg:size-10"
          >
            <Bell />
          </button>

          <Link href="/profile" className="flex size-7 items-center justify-center rounded-full bg-itembg lg:size-10">
            <User />
          </Link>
        </div>
      </nav>

      <NotificationDrawer isOpen={isOpen} handleClose={handleClose} />
    </header>
  );
};

export default ProfileHeader;
