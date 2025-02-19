import Link from "next/link";
import Image from "next/image";
import Button from "../Button";

const BusinessHero = () => {
  return (
    <main className="py-16">
      <div className="mb-8 mt-20 flex flex-col items-center gap-4 text-center lg:mt-10 lg:gap-6">
        <h1 className="text-4xl font-extrabold lg:text-6xl">
          Boost Engagements <br className="lg:hidden" /> & Drive{" "}
          <br className="hidden lg:inline-block" />
          Growth
        </h1>
        {/* <br className="lg:hidden" /> */}

        <p className="w-[70%] lg:w-[45%]">
          With Tazkora, you can grow your social media audience, get affordable
          and reliable hands for your business tasks, and enjoy fast, quality
          results without any stress. Whether you need extra support for your
          brand or help with day-to-day tasks, Tazkora makes it easy to get
          things done quickly and efficiently.
        </p>

        <Link href="/login">
          <Button className="rounded-[1.2rem] px-8 py-3">Get Started</Button>
        </Link>
      </div>

      <Image
        className="min-h-[40vh] w-screen object-cover"
        src="/svg/business-hero-image.svg"
        alt="hero image"
        width={1200}
        height={400}
      />
    </main>
  );
};

export default BusinessHero;
