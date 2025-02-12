"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { businessReviews } from "@/constants";
import Section from "../SectionComponents/Section";
import SectionHeading from "../SectionComponents/SectionHeading";
import SectionParagraph from "../SectionComponents/SectionParagraph";

const BusinessReview = () => {
  return (
    <section className="py-16">
      <Section className="mb-16">
        <SectionHeading>What Our Client Say</SectionHeading>

        <SectionParagraph>
          Businesses of all sizes trust Tazkora to drive engagements and result.
          From startups to established brands, here’s how our platform has
          helped them grow.
        </SectionParagraph>
      </Section>

      <Carousel
        className="w-full max-w-[100vw] bg-teal px-6 py-10 lg:p-20"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="">
          {businessReviews.map((review, index) => (
            <CarouselItem
              className="flex md:basis-1/2 lg:basis-1/3"
              key={index}
            >
              <div className="flex w-full flex-col space-y-6 rounded-2xl bg-white p-6 text-black">
                <div>
                  <h2 className="text-xl font-semibold">{review.name}</h2>
                  <p>{review.role}</p>
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

export default BusinessReview;
