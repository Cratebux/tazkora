'use client'
import Image from "next/image";
import success from "../../../../public/svg/success.svg";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter()
  return (
    <div className="bg-profilebg w-full h-screen flex justify-center items-center">
      <div className="bg-itembg mx-5 lg:mx-0 px-5 text-white w-[361px] h-[330px] rounded-[14px] flex flex-col items-center text-center justify-center">
        <Image src={success} alt="icon" width="54" height="54" />
        <h1 className="font-bold text-2xl py-5">Account Secured</h1>
        <p className="text-sm">
          You fit now log in, post tasks, or start earing daily. Na your time to
          shine
        </p>
        <button onClick={()=> router.push('/home')} className="bg-blue-600 px-10 py-3 w-max rounded-full text-white mt-5">
          let's go!
        </button>
      </div>
    </div>
  );
};

export default Success;
