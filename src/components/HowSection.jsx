"use client";
import { businessCardDetails, cardDetails } from "@/constants";
import InfoCard from "./InfoCard";
import Button from "./Button";
import Section from "./SectionComponents/Section";
import SectionHeading from "./SectionComponents/SectionHeading";
import SectionParagraph from "./SectionComponents/SectionParagraph";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HowSection = () => {
  const pathname = usePathname();

  return (
    <section
      id="how-section"
      className={`px-6 pb-16 pt-10 lg:px-10 ${pathname == "/business" ? "bg-black text-white" : "-text-black bg-white"}`}
    >
      <Section>
        <SectionHeading>How It Works</SectionHeading>

        <SectionParagraph>
          Tazkora was designed to make online earning easy and convenient for
          everyone. get started in three easy steps.
        </SectionParagraph>
      </Section>

      <div className="mt-14 flex flex-col items-center justify-center gap-6 lg:flex-row">
        {pathname == "/business"
          ? businessCardDetails.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))
          : cardDetails.map((card, index) => (
              <InfoCard {...card} key={index} />
            ))}
      </div>

      <Button className="mx-auto mt-6 flex self-center">
        <Link href="/login">
          {pathname == "/business" ? "Start Campaign" : "Join Now"}
        </Link>
      </Button>
    </section>
  );
};

export default HowSection;
