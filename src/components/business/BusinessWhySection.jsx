import { businessReasons, reasons } from "@/constants";
import Image from "next/image";
import Section from "../SectionComponents/Section";
import SectionHeading from "../SectionComponents/SectionHeading";
import SectionParagraph from "../SectionComponents/SectionParagraph";
import { ListItem } from "./PricingSection";

const BusinessWhySection = () => {
  return (
    <section className="py-16 text-white">
      <Section>
        <SectionHeading>Why Choose Tazkora?</SectionHeading>
        <SectionParagraph>
          Tazkora is your all in one solution for connecting with an audience
          that cares about your brand, save time, reduce costs, and achieving
          your marketing goals without hassle.
        </SectionParagraph>
      </Section>

      <div className="mt-16 space-y-6 px-6 lg:px-12">
        {businessReasons.map((card, index) => (
          <div
            className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between lg:gap-8 lg:odd:flex-row-reverse"
            key={index}
          >
            <Image
              className="object-cover lg:w-1/2"
              src={card.icon}
              alt="cards"
              width={350}
              height={350}
            />

            <div className="lg:w-1/2 ">
              <h3 className="mb-2 text-2xl font-semibold lg:text-3xl">
                {card.title}
              </h3>

              <div  className='lg:w-[80%]'>
                {card.list?.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessWhySection;
