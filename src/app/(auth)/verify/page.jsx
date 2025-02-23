"use client";
import Image from "next/image";
import pasteSvg from "../../../../public/svg/paste.svg";
import back from "../../../../public/svg/back.svg";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { EmailContext } from "@/app/context/EmailContext";
import { useRouter } from "next/navigation";

const Verify = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const { email, setToken } = useContext(EmailContext);
  const router = useRouter();

  // Function verification code sent to the user's email
  const handleInputChange = (index, value) => {
    if (value.length > 1) {
      value = value.charAt(0);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    //Automatically move to the next input
    if (value.length === 1 && index < code.length - 1) {
      document.querySelectorAll("input")[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      document.querySelectorAll("input")[index - 1].focus();
    }
  };

  const handleVerification = async () => {
    
    const data = await fetch(
      "https://tazkora-production.up.railway.app/api/users/verify",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, code: newcode }),
      },
    );
    const response = await data.json();
    // console.log(response.token)
    if (response.token) {
      router.push("/success");
      setToken(true)
    }
  };

  const hasAllValues = code.every(value => value !== "");
  const newcode = code.join("")

  if(hasAllValues ) {
    handleVerification();
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-profilebg">
      <div className="mx-5 flex h-[330px] w-[361px] flex-col justify-center rounded-[14px] bg-itembg px-5 text-white lg:mx-0">
        <Link href="/login">
          <Image
            className="pb-3"
            src={back}
            alt="icon"
            width="18"
            height="18"
          />
        </Link>
        <h1 className="pb-3 text-2xl font-bold">Enter Code</h1>
        <p className="text-sm">
          We sent a code to <span className="text-base font-bold">{email}</span>{" "}
          via gmail. Please enter it below
        </p>
        <div className="flex justify-between pt-5 w-full">
          {code.map((value, index) => (
            <input
              onChange={(e) => handleInputChange(index, e.target.value)}
              value={value}
              key={index}
              maxLength="1"
              className="mx-auto mt-3 flex h-[44] w-[44] rounded-[8px] bg-profilebg text-center outline-none"
            />
          ))}
        </div>

        <div>
          <div className="mt-5 flex h-5 w-max items-center gap-2 rounded-[8px] bg-white bg-opacity-5 px-5 py-5">
            <Image src={pasteSvg} width={14} height={14} alt="paste" />
            <p className="font-semibold text-white">Paste Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
