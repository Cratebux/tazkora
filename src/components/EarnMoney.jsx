"use client";

import Image from "next/image";
import Section from "./SectionComponents/Section";
import SectionHeading from "./SectionComponents/SectionHeading";
import SectionParagraph from "./SectionComponents/SectionParagraph";
import { howToEarn } from "@/constants";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const EarnMoney = () => {
  return (
    <section className="bg-[#D9D9D9] py-16" id="earn-section">
      <Section className="mb-12">
        <SectionHeading>
          Ways to Earn Money with <br className="hidden lg:inline-block" />{" "}
          Tazkora
        </SectionHeading>
        <SectionParagraph>
          Explore multiple earning opportunities like completing surveys,
          playing games, or engaging with social media. choose the tasks that
          suits you and start earning today.
        </SectionParagraph>
      </Section>

      <div className="hidden grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid lg:grid-cols-3 lg:px-14">
        {howToEarn.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5"
          >
            <div className="flex items-center gap-4">
              <Image src={card.icon} alt="icon" width={60} height={60} />
              <h3 className="text-2xl font-semibold">{card.title}</h3>
            </div>

            <p className="lg:w-[80%]">{card.desc}</p>

            <button className="rounded-lg border border-violet px-4 py-2 font-semibold text-violet">
              Learn More
            </button>
          </div>
        ))}

        <div className="flex flex-col items-start justify-between gap-10 rounded-2xl bg-[#416EF0] p-5 text-white">
          <h3 className="text-2xl font-semibold">Other tasks</h3>

          <button className="rounded-lg bg-white px-4 py-2 font-semibold text-violet">
            Learn More
          </button>
        </div>
      </div>

      <Carousel
        className="lg:hidden"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="me-4 flex items-stretch gap-4 p-8">
          {howToEarn.map((card, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5"
            >
              <div className="flex items-center gap-4">
                <Image src={card.icon} alt="icon" width={60} height={60} />
                <h3 className="text-2xl font-semibold">{card.title}</h3>
              </div>

              <p className="lg:w-[80%]">{card.desc}</p>

              <button className="rounded-lg border border-violet px-4 py-2 font-semibold text-violet">
                Learn More
              </button>
            </CarouselItem>
          ))}

          <CarouselItem className="flex flex-col items-start justify-between gap-10 rounded-2xl bg-[#416EF0] p-5 text-white">
            <h3 className="text-2xl font-semibold">Other tasks</h3>

            <button className="rounded-lg bg-white px-4 py-2 font-semibold text-violet">
              Learn More
            </button>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default EarnMoney;