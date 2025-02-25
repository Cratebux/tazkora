import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/SectionComponents/Section";
import SectionHeading from "@/components/SectionComponents/SectionHeading";
import SectionParagraph from "@/components/SectionComponents/SectionParagraph";
import Image from "next/image";
import Link from "next/link";

const LearnMore = () => {
  return (
    <section className="bg-white text-black">
      <Header />

      <Section className="mb-10 mt-10 px-6">
        <SectionHeading className="text-3xl md:text-4xl font-extrabold lg:text-5xl">
          How Tazkora Helps <br /> Businesses Grow
        </SectionHeading>
        <SectionParagraph>
          Tazkora is a powerful tool that transforms traditional marketing into
          an interactive, task-driven experience. It helps businesses grow their
          community, drive engagement, and promote products through gamified
          interactions that encourage real customer actions.
        </SectionParagraph>

        <div className="mt-10 grid max-lg:px-8 grid-cols-1 md:grid-cols-2  gap-8 lg:w-[80%] lg:grid-cols-3">
          {[
            {
              title: "Grow Community",
              icon: "complete",
              desc: "Turn community-building into an interactive, reward-driven experience",
              lists: [
                "Attract New Members through simple tasks",
                "Incentivize referral programs",
                "Reward event participation",
              ],
            },
            {
              title: "Drive Engagement",
              icon: "video",
              desc: "Keep your audience interested with interactive, fun, and rewarding experiences.",
              lists: [
                "Motivate content interaction",
                "Generate user content",
                "Run engaging challenges",
              ],
            },
            {
              title: "Promote Products",
              icon: "game",
              desc: "Turn customers into brand advocates through rewarding product-related actions.",
              lists: [
                "Incentivize purchases",
                "Encourage product reviews",
                "Enable partner collaborations",
              ],
            },
          ].map(({ title, icon, desc, lists }) => (
            <div key={title} className="space-y-2">
              <Image
                src={`/svg/${icon}.svg`}
                alt={icon}
                width={60}
                height={60}
              />

              <div className="space-y-2 text-left text-sm">
                <h3 className="text-xl font-medium">{title}</h3>
                <p>{desc}</p>

                <div className="space-y-3">
                  {lists.map((list) => (
                    <li key={list} className="flex items-center gap-[8px]">
                      <Image
                        className="mt-1 self-start"
                        src="/svg/list-icon.svg"
                        alt='icon'
                        width={17}
                        height={17}
                      />
                      {list}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="flex flex-col items-center justify-center gap-6 px-4 py-16">
        <SectionHeading className="text-center">
          Community Growth Example
        </SectionHeading>

        <SectionParagraph className="text-center">
          See how a gaming brand grows their Telegram community using Tazkora
        </SectionParagraph>

        <p className="text-center font-semibold">
          "Join our Telegram group & invite 3 friends to earn 50 points!"
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg border border-black p-4">
            <Image src="/svg/cancel.svg" alt="cancel" width={20} height={20} />
            <div className="space-y-2">
              <h2 className="font-semibold">Traditional Approach</h2>
              <p>Brands run ads, hoping people will join</p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border border-black p-4">
            <Image src="/svg/check.svg" alt="check" width={20} height={20} />
            <div className="space-y-2">
              <h2 className="font-semibold">Tazkora Approach</h2>
              <p>
                Brands reward users for actively growing the <br /> community
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 px-4 py-16">
        <SectionHeading className="text-center">
          Engagement Example
        </SectionHeading>

        <SectionParagraph className="text-center">
          Discover how a cosmetics brand drives product engagement
        </SectionParagraph>

        <p className="text-center font-semibold">
          "Post a picture using our new face cream and tag us for a chance to
          win a gift box!"
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg border border-black p-4">
            <Image src="/svg/cancel.svg" alt="cancel" width={20} height={20} />
            <div className="space-y-2">
              <h2 className="font-semibold">Traditional Approach</h2>
              <p>
                Brands post content and hope for likes & <br /> shares
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border border-black p-4">
            <Image src="/svg/check.svg" alt="check" width={20} height={20} />
            <div className="space-y-2">
              <h2 className="font-semibold">Tazkora Approach</h2>
              <p>
                Brands create engagement tasks that <br /> guarantee
                participation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 px-4 py-16">
        <SectionHeading className="text-center">
          Product Promotion Example
        </SectionHeading>

        <SectionParagraph className="text-center">
          Learn how an online gadget store boosts sales
        </SectionParagraph>

        <p className="text-center font-semibold">
          "Buy our new gaming headset & leave a review to get an exclusive 20%
          discount!"
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg border border-black p-4">
            <Image src="/svg/cancel.svg" alt="cancel" width={20} height={20} />
            <div className="space-y-2">
              <h2 className="font-semibold">Traditional Approach</h2>
              <p>
                Brands rely on ads and promotions hoping <br /> people buy
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg border border-black p-4">
            <Image src="/svg/check.svg" alt="check" width={20} height={20} />
            <div className="space-y-2">
              <h2 className="font-semibold">Tazkora Approach</h2>
              <p>
                Brands incentivize purchases with rewarding <br /> tasks
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-6 px-4 py-16">
        <SectionHeading className="text-center">
          Ready to Transform <br /> Your Marketing?
        </SectionHeading>

        <SectionParagraph className="text-center">
          Unlike traditional marketing, Tazkora gamifies the experience. Every
          action is rewarded, making marketing more interactive, measurable, and
          fun for both businesses and customers.
        </SectionParagraph>

        <Link href="/login">
          <Button>Get Started</Button>
        </Link>
      </section>
      <Footer />
    </section>
  );
};

export default LearnMore;
