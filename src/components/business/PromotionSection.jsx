"use client";
import Image from "next/image";
import { howToPromote } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import Section from "../SectionComponents/Section";
import SectionHeading from "../SectionComponents/SectionHeading";
import SectionParagraph from "../SectionComponents/SectionParagraph";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { redirect } from 'next/navigation';

const PromotionSection = () => {
  return (
    <section className="bg-teal py-20 text-black" id="earn-money">
      <Section className="mb-12 px-4 text-white">
        <SectionHeading>
          Ways to Promote your brand <br className="hidden lg:inline-block" />{" "}
          with Tazkora
        </SectionHeading>
        <SectionParagraph>
          Explore multiple earning opportunities like completing surveys,
          playing games, or engaging with social media. choose the tasks that
          suits you and start earning today.
        </SectionParagraph>
      </Section>

      <div className="hidden grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid lg:grid-cols-3 lg:px-14">
        {howToPromote.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5"
          >
            <div className="flex items-center gap-4">
              <Image src={card.icon} alt="icon" width={60} height={60} />
              <h3 className="text-2xl font-semibold">{card.title}</h3>
            </div>

            <p className="lg:w-[80%]">{card.desc}</p>

            <button
              className="rounded-lg border border-violet px-4 py-2 font-semibold text-violet"
              onClick={() => redirect("/business/learn-more")}
            >
              Learn More
            </button>
          </div>
        ))}
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
          {howToPromote.map((card, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5"
            >
              <div className="flex items-center gap-4">
                <Image src={card.icon} alt="icon" width={60} height={60} />
                <h3 className="text-2xl font-semibold">{card.title}</h3>
              </div>

              <p className="lg:w-[80%]">{card.desc}</p>

              <button
                className="rounded-lg border border-violet px-4 py-2 font-semibold text-violet"
                onClick={() => redirect("/business/learn-more")}
              >
                Learn More
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default PromotionSection;
