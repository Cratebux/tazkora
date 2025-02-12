"use client";
import Link from "next/link";
import Button from "./Button";
import SectionHeading from "./SectionComponents/SectionHeading";
import SectionParagraph from "./SectionComponents/SectionParagraph";
import { usePathname } from "next/navigation";

const CallToAction = () => {
  const pathname = usePathname();

  return (
    <section
      className={`flex flex-col items-center justify-center gap-6 px-4 py-16 ${pathname !== "/business" ? "bg-neutral text-black" : "bg-teal text-white"}`}
    >
      <SectionHeading>Small Tasks, Big Rewards</SectionHeading>

      <SectionParagraph className="text-center">
        Don’t miss out on the opportunity to earn money online. join thousands
        of Nigerians who are using Tazkora to achieve financial freedom.
      </SectionParagraph>

      <Link href="/login">
        <Button>Sign Up Now</Button>
      </Link>
    </section>
  );
};

export default CallToAction;
