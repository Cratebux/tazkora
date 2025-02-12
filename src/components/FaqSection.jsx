import Section from "./SectionComponents/Section";
import SectionHeading from "./SectionComponents/SectionHeading";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="space-y-8 px-6 py-12 lg:px-20">
      <Section>
        <SectionHeading className="text-center">
          Frequently Asked Questions <br /> (FAQ)
        </SectionHeading>
      </Section>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold lg:text-2xl">
            What is Tazkora?
          </AccordionTrigger>
          <AccordionContent className="lg:text-md font-medium">
            Tazkora is a gig platform for Nigerians that connects users to
            online and offline tasks, allowing them to earn ₦1,500+ daily.
            Whether it’s social media tasks, deliveries, or surveys, Tazkora
            helps you work smarter and earn more.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold lg:text-2xl">
            Is Tazkora legit?
          </AccordionTrigger>
          <AccordionContent className="lg:text-md font-medium">
            Yes! Tazkora is 100% legit. We ensure trust and security through:
            <br />
            <br />
            <ol className="list-disc">
              <li>
                NIN verification for all users. Secure payments via Flutterwave
                and Paystack.
              </li>
              <li>24/7 customer support on WhatsApp.</li>
              <li>
                Join thousands of Nigerians earning daily – your hustle starts
                here!
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold lg:text-2xl">
            How much can I earn with Tazkora?
          </AccordionTrigger>
          <AccordionContent className="lg:text-md font-medium">
            Your earnings depend on the tasks you complete:
            <br />
            Basic Plan: ₦500–₦2,000/day (social media tasks, surveys).
            <br />
            Premium Plan: ₦2,000–₦10,000+/day (content creation, VIP
            deliveries).
            <br />
            The more tasks you complete, the more you earn!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold lg:text-2xl">
            What do i need to get started?
          </AccordionTrigger>
          <AccordionContent className="lg:text-md font-medium">
            Getting started is simple! You’ll need:
            <br />
            1. A smartphone (Android or iOS).
            <br />
            2. A Nigerian phone number for registration.
            <br />
            3. A bank account to receive payments.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold lg:text-2xl">
            Can I start making money online on Tazkora right now?
          </AccordionTrigger>
          <AccordionContent className="lg:text-md font-medium">
            Yes! Follow these 3 easy steps:
            <br />
            1. Sign Up: Register with your phone number or email and verify with
            OTP.
            <br />
            2. Choose Tasks: Pick from options like following social media pages
            or taking surveys.
            <br />
            3. Earn & Withdraw: Submit proof, get verified, and cash out
            instantly.
            <br />
            Start today and begin earning with Tazkora!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
