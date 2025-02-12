import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <main className="py-16">
      <div className="mb-8 mt-20 lg:mt-10 flex flex-col items-center gap-4 text-center lg:gap-6">
        <h1 className="text-4xl font-extrabold lg:text-6xl">
          Simple Ways to Make <br className="lg:hidden" /> Money{" "}
          <br className="hidden lg:inline-block" /> Online
        </h1>

        <p className="w-[70%] lg:w-[45%]">
          Earn money online anytime, anywhere by completing simple tasks. Sign
          up today and start your journey towards financial freedom.
        </p>

        <Link href="/login">
          <Button className="rounded-[1.2rem] px-8 py-3">Start Earning</Button>
        </Link>
      </div>

      <Image
        className="min-h-[40vh] w-screen object-cover"
        src="/svg/hero-image.svg"
        alt="hero image"
        width={1200}
        height={400}
      />
    </main>
  );
};

export default Hero;
