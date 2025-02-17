import Image from "next/image";
import React from "react";
import warning from '../../../public/svg/!.svg'
import MyReward from "@/components/profile/MyReward";
import RecentPayout from "@/components/profile/RecentPayout";
import RecommendedTask from "@/components/profile/RecommendedTasks";

const Profile = () => {
  return (
    <>
      <MyReward/>
      <RecentPayout/> 
      <RecommendedTask/>
    </>
  );
};

export default Profile;
