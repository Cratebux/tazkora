"use client";
import Image from "next/image";
import signUpSvg from "../../../../public/svg/signup.svg";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { EmailContext } from "@/app/context/EmailContext";

const Login = () => {
  const [newemail, setNewEmail] = useState("");
  const { setEmail, email } = useContext(EmailContext)
  const router = useRouter();
  const sendVerification = async (e) => {
    e.preventDefault()
    if(newemail){
      setEmail(newemail);
    }

    setTimeout( async() => {
      const data = await fetch(
        "https://tazkora-3.onrender.com/api/users/request-access",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      const response = await data.json();
      if (response.email) {
        router.push("/verify");
      } else {
        alert("Login Failed");
      }
    }, 5000);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-profilebg">
      <div className="mx-5 flex h-[330px] w-[361px] flex-col justify-center rounded-[14px] bg-itembg px-5 text-white lg:mx-0">
        <Image
          className="pb-3"
          src={signUpSvg}
          alt="icon"
          width="64"
          height="64"
        />
        <h1 className="text-2xl font-bold">Welcome to Tazkora</h1>
        <p className="">Please sign in or sign below</p>
        <div className="pt-5">
          <label className="font-semibold">Email:</label>
          <input
            className="mt-3 w-full rounded-[8px] bg-profilebg py-3 pl-5 outline-none"
            placeholder="riderezzy@gmail.com"
            onChange={(e) => {
              setNewEmail(e.target.value);
            }}
          />
          <button
            onClick={sendVerification}
            className="mt-3 w-full rounded-[8px] border border-profilebg py-3"
          >
            Continue with email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
