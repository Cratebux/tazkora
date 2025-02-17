"use client"
import Image from "next/image";
import signUpSvg from "../../../../public/svg/signup.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("")
  // const [verify, setVerify] =useState(false)
  const router = useRouter()

  const sendVerification = async() => {
      const data = await fetch('https://tazkora.up.railway.app/api/users/request-access', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({email})
      })
      
      const response = await data.json();
      // console.log(response)
      // if(response.ok) {
      //   router.push('/verify')
      // }else{
      //   alert("Login Failed")
      // }
  }

  
  return (
    <div className="bg-profilebg w-full h-screen flex justify-center items-center">
      <div className="bg-itembg mx-5 lg:mx-0 px-5 text-white w-[361px] h-[330px] rounded-[14px] flex flex-col justify-center">
        <Image
          className="pb-3"
          src={signUpSvg}
          alt="icon"
          width="64"
          height="64"
        />
        <h1 className="font-bold text-2xl">Welcome to Tazkora</h1>
        <p className="">Please sign in or sign below</p>
        <div className="pt-5">
          <label className="font-semibold">Email:</label>
          <input
            className="bg-profilebg w-full mt-3 outline-none py-3 pl-5 rounded-[8px]"
            placeholder="riderezzy@gmail.com"
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <button onClick={sendVerification} className="border-profilebg border w-full py-3 mt-3 rounded-[8px]">
            Continue with email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
