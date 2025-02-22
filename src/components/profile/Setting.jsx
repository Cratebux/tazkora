import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import mail from "../../../public/svg/mail.svg";
import shield from "../../../public/svg/shield.svg";
import contact from "../../../public/svg/contact.svg";
import copy from "../../../public/svg/copy.svg";
import deleteBtn from "../../../public/svg/delete.svg";

const Setting = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold lg:text-[2rem]">My Account Settings</h1>

        <div className="pt-10">
          <div className="flex gap-5 border-b-[.1rem] border-gray-500 pb-1">
            <Image src={mail}  alt="mail"/>
            <div className="grid">
              <h1 className="text-[.8rem]">ridderezzy@gmail.com</h1>
              <p className="text-[.7rem] opacity-50">Account email</p>
            </div>
          </div>

          <div className="flex w-full justify-between border-b-[.1rem] border-gray-500 py-1">
            <div className="flex gap-5">
              <Image src={shield} alt="shield" />
              <div className="grid">
                <h1 className="text-[.8rem]">
                  f60e3e15-2b34-42ef-b484-6f0443c79e3c
                </h1>
                <p className="text-[.7rem] opacity-50">My Account ID</p>
              </div>
            </div>
            <Image src={copy} alt="copy" />
          </div>

          <div className="flex w-full justify-between border-b-[.1rem] border-gray-500 py-1">
            <div className="flex gap-5">
              <Image src={contact} alt="contact" />
              <div className="grid">
                <a className="text-[.8rem]">Delete my account</a>
                <p className="text-[.7rem] opacity-50">
                  Permanently delete your account data and earnings
                </p>
              </div>
            </div>
            <Image src={deleteBtn} alt="deleteBtn"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
