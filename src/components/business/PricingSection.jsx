"use client";
import { pricings } from "@/constants";
import Section from "../SectionComponents/Section";
import SectionHeading from "../SectionComponents/SectionHeading";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const ListIcon = ({ className }) => {
  return (
    <img
      className={className}
      src="/svg/tick.svg"
      alt="icon"
      width={18}
      height={18}
    />
  );
};

export const ListItem = ({ children }) => {
  return (
    <li className="flex items-center gap-[8px]">
      <ListIcon className="mt-1 self-start" />
      {children}
    </li>
  );
};

const PricingSection = () => {
  return (
    <section className="pb-20">
      <Section className="mb-16">
        <SectionHeading>Pay For Success</SectionHeading>
      </Section>

      <div className="hidden grid-cols-3 items-center justify-center gap-8 px-24 lg:grid">
        {pricings.map((item, index) => (
          <div
            key={index}
            className={index === 1 ? `rounded-3xl bg-primary text-white` : ""}
          >
            {index === 1 && (
              <h2 className="my-6 text-center text-2xl font-semibold uppercase">
                Most Popular
              </h2>
            )}

            <div
              className={`rounded-3xl p-4 py-10 ${index !== 0 ? "bg-white text-black" : "bg-primary text-white"}`}
            >
              <h3 className="text-xl font-semibold">{item.package}</h3>
              <div className="flex items-end">
                <h3 className="text-3xl font-semibold">₦{item.price}</h3>
                <p> / Month</p>
              </div>

              <ul className="mt-4 space-y-2.5">
                {item.perks.map((perk) => (
                  <ListItem key={perk}>{perk}</ListItem>
                ))}
              </ul>

              <button
                className={`mt-28 w-full rounded-2xl py-4 text-3xl font-semibold ${
                  index > 0 ? "bg-primary text-white" : "bg-white text-primary"
                }`}
              >
                {index > 0 ? "Select Plan" : "Current Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-8 lg:hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {pricings.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={
                  index === 1 ? `rounded-3xl bg-primary pt-1 text-white` : ""
                }
              >
                {index === 1 && (
                  <h2 className="my-4 text-center text-2xl font-semibold uppercase">
                    Most Popular
                  </h2>
                )}

                <div
                  className={`rounded-3xl p-4 py-10 ${index !== 0 ? "bg-white text-black" : "bg-primary text-white"}`}
                >
                  <h3 className="text-xl font-semibold">{item.package}</h3>
                  <div className="flex items-end">
                    <h3 className="text-3xl font-semibold">₦{item.price}</h3>
                    <p> / Month</p>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {item.perks.map((perk) => (
                      <ListItem key={perk}>{perk}</ListItem>
                    ))}
                  </ul>

                  <button
                    className={`mt-28 w-full rounded-2xl py-4 text-3xl font-semibold ${
                      index > 0
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                    }`}
                  >
                    {index > 0 ? "Select Plan" : "Current Plan"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PricingSection;
