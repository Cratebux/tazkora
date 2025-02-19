import HomeHeader from "../../components/HomeHeader";
import Partners from "@/components/Partners";
import Tasks from "../../components/Tasks";
import gamebanner from "../../../public/images/gamebanner.png";
import gamebanner2 from "../../../public/images/gamebanner2.png";
import Image from "next/image";
import QuickTasks from "../../components/QuickTasks";
import Surveys from "../../components/Surveys";
import ProfileFooter from "@/components/profile/ProfileFooter";
const Home = () => {
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
      <div className="px-6 lg:px-16">
        <ProfileFooter />
      </div>
    </div>
  );
};

export default Home;
