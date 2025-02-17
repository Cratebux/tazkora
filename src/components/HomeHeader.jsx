import Image from "next/image";
import Link from "next/link";
import { Bell, Plus, User } from "lucide-react";
import notification from "../../public/svg/notification.svg";
import user from "../../public/svg/user.svg";
import banner from "../../public/images/herobanner.png";

const Home = () => {
  return (
    <>
      <header className="object-fit bg-cover bg-no-repeat pt-5 lg:h-screen lg:bg-banner-bg lg:px-10">
        {/* start of header */}
        <div className="flex justify-between px-5 pb-5 lg:pb-0 items-center">
          <h1 className="text-3xl font-bold text-white">Tazkora</h1>
          <nav className="flex items-center justify-between text-white gap-4">
            <button className="flex size-10 items-center justify-center rounded-full bg-blue">
              <Plus />
            </button>

            <div className="flex items-center justify-between gap-4 rounded-full bg-teal p-2.5">
              <button className="flex size-10 items-center justify-center rounded-full bg-itembg">
                <Bell />
              </button>
              <button className="flex size-10 items-center justify-center rounded-full bg-itembg">
                <User />
              </button>
            </div>
          </nav>
        </div>
        {/* end of header */}
        <div>
          <h1 className="font hidden h-screen items-center justify-center text-center text-[4rem] font-bold text-white lg:grid">
            Simple ways to make <br />
            money online{" "}
          </h1>
        </div>
      </header>
      <div className="object-fit h-[15rem] w-full bg-banner-bg bg-cover lg:h-0 lg:bg-none"></div>
    </>
  );
};

export default Home;
