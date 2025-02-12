import Header from "@/app/component/Header";
import Partners from "@/app/component/Partners";
import Tasks from "../component/Tasks";
import gamebanner from '../../../public/images/gamebanner.png'
import gamebanner2 from '../../../public/images/gamebanner2.png'
import Image from "next/image";
import QuickTasks from "../component/QuickTasks";
import Surveys from "../component/Surveys";
const Home = () => {
  return(
    <div className="bg-backgroundDark">
      <Header/>
      <Partners/>
      <Tasks/>
      <Image
        src={gamebanner}
        alt="gamebanner"
        className="w-full lg:px-10 px-5 pt-10"
      />
      <QuickTasks/>
      <Surveys/>
      <Image
        src={gamebanner2}
        alt="gamebanner"
        className="w-full lg:px-10 px-5 py-10"
      />
    </div>
  )
};

export default Home