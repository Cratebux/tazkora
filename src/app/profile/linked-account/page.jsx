import Image from "next/image";

const LinkedAccount = () => {
  return (
    <section className="pb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          Social Media Accounts
        </h2>
        <p className="text-sm text-neutral2">
          Link your social media accounts to engage in social offers and earn by
          liking, following, and interacting with social content.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start justify-between gap-4 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-xl bg-itembg px-6 py-6">
          <Image
            src="/svg/social-twitter.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <div>
            <p className="font-semibold">Twitter</p>
            <p className="text-neutral2">ridderezzy</p>
          </div>
          <Image
            className="ml-auto"
            src="/svg/social-checked.svg"
            alt="checked"
            width={35}
            height={35}
          />
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-itembg px-6 py-6">
          <Image
            src="/svg/social-telegram.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <div>
            <p className="font-semibold">Telegram</p>
          </div>

          <button className="ml-auto rounded-lg bg-blue px-3 py-1 text-white">
            Link
          </button>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-itembg px-6 py-6">
          <Image
            src="/svg/social-discord.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <div>
            <p className="font-semibold">Discord</p>
          </div>

          <button className="ml-auto rounded-lg bg-blue px-3 py-1 text-white">
            Link
          </button>
        </div>
      </div>
    </section>
  );
};

export default LinkedAccount;
