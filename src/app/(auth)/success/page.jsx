import Image from "next/image";
import success from "../../../../public/icons/success.svg";

const Success = () => {
  return (
    <div className="bg-backgroundDark w-full h-screen flex justify-center items-center">
      <div className="bg-backgroundLight mx-5 lg:mx-0 px-5 text-white w-[361px] h-[330px] rounded-[14px] flex flex-col items-center text-center justify-center">
        <Image src={success} alt="icon" width="54" height="54" />
        <h1 className="font-bold text-2xl py-5">Account Secured</h1>
        <p className="text-sm">
          You fit now log in, post tasks, or start earing daily. Na your time to
          shine
        </p>
        <button className="bg-blue-600 px-10 py-3 w-max rounded-full text-white mt-5">
          let's go!
        </button>
      </div>
    </div>
  );
};

export default Success;
