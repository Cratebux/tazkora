"use client";
import Section from "./SectionComponents/Section";
import SectionHeading from "./SectionComponents/SectionHeading";
import SectionParagraph from "./SectionComponents/SectionParagraph";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { reviews } from "@/constants";

const ReviewSection = () => {
  return (
    <section className="pb-16">
      <Section className="mb-16">
        <SectionHeading>What Our User Say</SectionHeading>

        <SectionParagraph>
          Hear directly from members of our community who have transformed their
          free time into real income. We aim to make earning online simple,
          secure and rewarding.
        </SectionParagraph>
      </Section>

      <Carousel
        className="w-full max-w-[100vw] bg-neutral px-6 py-10 lg:p-20"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="">
          {reviews.map((review, index) => (
            <CarouselItem
              className="flex md:basis-1/2 lg:basis-1/3"
              key={index}
            >
              <div className="flex w-full flex-col space-y-6 rounded-2xl bg-white p-6">
                <div>
                  <h2 className="text-xl font-semibold">{review.name}</h2>
                  <p>January 25, 2025</p>
                </div>

                <p>{review.comment}</p>

                <div className="flex items-center gap-1">
                  {Array(5)
                    .fill(null)
                    .map((val, index) => (
                      <Star
                        className="fill-[#5B58EB] text-[#5B58EB]"
                        key={index}
                      />
                    ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ReviewSection;
