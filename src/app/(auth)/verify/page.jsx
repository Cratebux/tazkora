"use client"
import Image from "next/image";
import pasteSvg from "../../../../public/svg/paste.svg";
import back from "../../../../public/svg/back.svg";
import Link from "next/link";
import { useState } from "react";

const Verify = () => {
  const [code, setCode] = useState('')

  // Function verification code sent to the user's email
  const handleVerification = async() => {
      const data = await fetch('https://tazkora.up.railway.app/api/users/verify', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({email, code})
      })
  }
  
  return (
    <div className="bg-profilebg w-full h-screen flex justify-center items-center">
      <div className="bg-itembg mx-5 lg:mx-0 px-5 text-white w-[361px] h-[330px] rounded-[14px] flex flex-col justify-center">
        <Link href="/login">
          <Image
            className="pb-3"
            src={back}
            alt="icon"
            width="18"
            height="18"
          />
        </Link>
        <h1 className="font-bold text-2xl pb-3">Enter Code</h1>
        <p className="text-sm">
          We sent a code to{" "}
          <span className="font-bold text-base">riderezzy@gmail.com</span> via
          gmail. Please enter it below
        </p>
        <div className="pt-5 flex justify-between">
          <input className="bg-profilebg outline-none flex mx-auto w-[44] h-[44] mt-3 rounded-[8px]" />
          <input className="bg-profilebg outline-none flex mx-auto w-[44] h-[44] mt-3 rounded-[8px]" />
          <input className="bg-profilebg outline-none flex mx-auto w-[44] h-[44] mt-3 rounded-[8px]" />
          <input className="bg-profilebg outline-none flex mx-auto w-[44] h-[44] mt-3 rounded-[8px]" />
          <input className="bg-profilebg outline-none flex mx-auto w-[44] h-[44] mt-3 rounded-[8px]" />
          <input className="bg-profilebg outline-none flex mx-auto w-[44] h-[44] mt-3 rounded-[8px]" />
        </div>

        <div>
          <div className="bg-white rounded-[8px] mt-5 gap-2 bg-opacity-5 w-max flex py-5 items-center px-5 h-5">
            <Image src={pasteSvg} width={14} height={14} alt="paste" />
            <p className="font-semibold text-white">Paste Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
