import { cardDetails, reasons } from "@/constants";
import Section from "./SectionComponents/Section";
import SectionHeading from "./SectionComponents/SectionHeading";
import SectionParagraph from "./SectionComponents/SectionParagraph";
import Image from "next/image";

const WhySection = () => {
  return (
    <section className="pb-12">
      <Section>
        <SectionHeading>Why Choose Tazkora?</SectionHeading>
        <SectionParagraph>
          Tazkora offers a secure and flexible platform that makes earning money
          online easy. Join thousands of Nigerians turning spare time into
          steady income.
        </SectionParagraph>
      </Section>

      <div className="mt-16 space-y-6 px-6 lg:px-12">
        {reasons.map((card, index) => (
          <div
            className="flex flex-col-reverse items-center justify-center gap-6 lg:flex-row lg:justify-between lg:gap-8 lg:odd:flex-row-reverse"
            key={index}
          >
            <img
              className="object-cover lg:w-1/2"
              src={card.image}
              alt="cards"
              width={320}
              height={320}
            />

            <div className="text-center lg:w-1/2 lg:text-left">
              <h3 className="mb-2 text-2xl font-semibold lg:text-3xl">
                {card.title}
              </h3>
              <p className="w-full text-gray-500 md:mx-auto md:w-[70%] lg:mx-0 lg:w-[65%]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
