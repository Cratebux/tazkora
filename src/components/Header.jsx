"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-8 lg:px-12">
      <Link href="/">
        <Image src="/svg/tazkora-logo.svg" alt="logo" width={120} height={60} />
      </Link>

      <ul className="hidden items-center gap-8 font-medium lg:flex">
        <li>
          <a href="#earn-section">Earn money</a>
        </li>
        <li>
          <a href="#how-section">How It Works</a>
        </li>
        <li>
          <Link href="/business">For Business</Link>
        </li>
      </ul>

      <Link className="hidden lg:flex" href="/login">
        <Button>Sign In</Button>
      </Link>

      <button className="lg:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        {!isOpen ? <AlignJustify /> : <X />}
      </button>

      <motion.ul
        initial={{
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}
        animate={{
          height: isOpen ? 300 : 0,
          opacity: isOpen ? 1 : 0,
          paddingTop: isOpen ? "2rem" : 0,
          paddingBottom: isOpen ? "2rem" : 0,
        }}
        exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-0 right-0 top-20 flex h-auto flex-col items-center gap-8 overflow-hidden bg-white font-medium lg:hidden"
      >
        <li>
          <a href="#earn-section">Earn money</a>
        </li>
        <li>
          <a href="#how-section">How It Works</a>
        </li>
        <li>
          <Link href="/business">For Business</Link>
        </li>

        <li>
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
        </li>
      </motion.ul>
    </header>
  );
};

export default Header;
