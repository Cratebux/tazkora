import SubscribeButton from "@/components/profile/SubscribeButton";

const Premium = () => {
  return (
    <section className="pb-8">
      <div className="my-6 mb-10 space-y-2">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          🚀 Unlock More with Tazkora Pro!
        </h2>
        <p>3 days free trial. No contract or credit card required.</p>
      </div>
      <div className="grid grid-cols-1 items-center gap-8 lg:w-[90%] lg:grid-cols-2 lg:items-stretch">
        <div className="bg-white p-8 text-black">
          <div className="mb-4 space-y-4 text-center">
            <p className="text-2xl font-semibold">Basic</p>
            <h2 className="text-5xl font-black">Free</h2>
            <p>Simple Tasks, Daily Earnings.</p>
            <h2 className="text-5xl font-black">₦0</h2>
          </div>

          <div>
            <b>Simple Tasks, Daily Earnings.</b>
          </div>

          <nav className="mt-3 space-y-3">
            <li>
              Access to Basic Tasks social media follows, surveys, app testing.
            </li>
            <li>Earn ₦500–₦2,000 daily.</li>
            <li>Bank transfer payout</li>
            <li>Complete up to 5 tasks/day.</li>
            <li>
              Basic customer support via WhatsApp (48-hour response time)..
            </li>
          </nav>
        </div>

        <div className="bg-[#1E2135] p-8 text-white">
          <div className="mb-4 space-y-4 text-center">
            <p className="text-2xl font-semibold">Pro</p>
            <h2 className="text-5xl font-black">Tazkora</h2>
            <p className="text-[93959E]">
              Don't let task limits hold you back. Upgrade to Tazkora Premium
              today and unlock your full potential.
            </p>

            <div className="flex items-end justify-center gap-1">
              <h2 className="text-5xl font-black">₦2500</h2>
              <span className="text-[#747474]">per week</span>
            </div>
          </div>

          <div>
            <b>For Power earners, freelancers, full-time hustlers.</b>
          </div>

          <nav className="mt-3 space-y-3">
            <li>Get everything included in free, plus</li>
            <li>Access to High-Paying Tasks</li>
            <li>Earn ₦2,000–₦10,000+ daily.</li>
            <li>Complete up to 20 tasks/day.</li>
            <li>Dedicated support agent (24-hour response time)</li>
          </nav>

          <SubscribeButton />
        </div>
      </div>

      <p className='ml-auto mt-8 text-neutral2 w-fit'>Step 1 of 2</p>
    </section>
  );
};

export default Premium;
