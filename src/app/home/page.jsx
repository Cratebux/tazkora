"use client";
import HomeHeader from "../../components/HomeHeader";
import Partners from "@/components/Partners";
import Tasks from "../../components/Tasks";
import gamebanner from "../../../public/images/gamebanner.png";
import gamebanner2 from "../../../public/images/gamebanner2.png";
import Image from "next/image";
import QuickTasks from "../../components/QuickTasks";
import Surveys from "../../components/Surveys";
import HomeFooter from "@/components/HomeFooter";
import { useRouter } from "next/navigation";

// export const token = localStorage.getItem("authToken");


const Home = () => {
  const router = useRouter();

  const checkTokenExpiration = () => {
    if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!token || !expiryDate) {
      return false;
    }
    const currentTime = Math.floor(Date.now() / 1000);

    if (currentTime > expiryDate) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("expiryDate");
      return false;
    }
  }

    return true;
  };

  checkTokenExpiration();
  if (!checkTokenExpiration()) {
    router.push("/login");
  }

  return (
    <div className="bg-profilebg">
      <HomeHeader />
      <Partners />
      <Tasks />
      <Image
        src={gamebanner}
        alt="gamebanner"
        className="w-full px-5 pt-10 lg:px-10"
      />
      <QuickTasks />
      <Surveys />
      <Image
        src={gamebanner2}
        alt="gamebanner"
        className="w-full px-5 py-10 lg:px-10"
      />
      <HomeFooter />
    </div>
  );
};

export default Home;
