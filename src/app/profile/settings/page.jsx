import Image from "next/image";

const Settings = () => {
  return (
    <section className="pb-8 min-h-[80vh]">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          My Accounts Settings
        </h2>
      </div>

      <ul className="flex flex-col gap-1">
        <li className="flex items-center gap-4 border-b border-[#2A2B33] py-2">
          <Image
            src="/svg/setting-mail.svg"
            alt="icon"
            width={30}
            height={30}
          />

          <div>
            <p className="text-white">riderezzy@gmail.com</p>
            <p className="text-xs text-[#B6B7B9]">Account email</p>
          </div>
        </li>

        <li className="flex gap-4 py-2 border-[#2A2B33] border-b">
          <Image
            src="/svg/setting-protect.svg"
            alt="icon"
            width={30}
            height={30}
          />

          <div>
            <p className="text-white">f60e3e15-2b34-42ef-b484-6f0443c79e3c</p>
            <p className="text-xs text-[#B6B7B9]">My Account ID</p>
          </div>

          <Image
            className="ml-auto"
            src="/svg/setting-copy.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </li>

        <li className="flex gap-4 py-2 border-[#2A2B33] border-b">
          <Image
            src="/svg/setting-person.svg"
            alt="icon"
            width={30}
            height={30}
          />

          <div>
            <p className="text-white">Delete my account</p>
            <p className="text-xs text-[#B6B7B9]">
              Permanently delete your account data and earnings
            </p>
          </div>

          <Image
            className="ml-auto"
            src="/svg/setting-trash.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </li>
      </ul>
    </section>
  );
};

export default Settings;
