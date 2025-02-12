import Image from "next/image";
import React from "react";
import warning from '../../../public/svg/!.svg'

const Profile = () => {
  return (
    <>
      <div className="text-white">
        <h1 className="text-[2rem] font-semibold">My Rewards</h1>
        <p className="text-[1rem]">view all</p>
      </div>
      <div className="bg-itembg rounded flex w-max text-white opacity-50 px-5 py-2">
        <Image
          src={warning}
          alt="warning"
        />
        <p>Expect your rewards within 72 hours of completing the task.</p>
      </div>
    </>
  );
};

export default Profile;
