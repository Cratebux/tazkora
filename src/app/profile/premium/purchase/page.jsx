"use client";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const PurchasePremium = () => {
  const [selected, setSelected] = useState("weekly");

  return (
    <section className="pb-8">
      <button
        className="mb-6 flex items-center gap-2"
        onClick={() => redirect("/profile/premium")}
      >
        <ArrowLeft />
        <span>Back</span>
      </button>

      <div className="my-6 mb-10 space-y-2">
        <h2 className="text-3xl font-bold lg:text-4xl">
          Tazkora <span className="text-2xl lg:text-2xl">Pro</span>
        </h2>
        <p>
          Pick a subscription to start your 3 days free trial. No contract or
          credit card required.
        </p>
      </div>

      <div className="mt-8 space-y-2">
        <h2 className="text-xl lg:text-2xl font-semibold">
          Unlock Your Earning Potential with Tazkora Premium!
        </h2>
        <p>
          Earn ₦2,000–₦10,000+ daily with exclusive high-paying tasks and perks.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          className={`flex cursor-pointer flex-col rounded-xl border bg-itembg p-6 ${
            selected === "weekly" ? "border-blue" : "border-transparent"
          }`}
          onClick={() => setSelected("weekly")}
        >
          <input
            type="radio"
            name="subscription"
            value="weekly"
            checked={selected === "weekly"}
            className="hidden"
          />
          <p className="mb-6 text-xl font-semibold text-blue">Weekly</p>
          <p className="text-2xl font-semibold">₦2,500.00</p>

          <p className="mt-4 border-t-2 border-neutral2 pt-2 text-sm lg:mt-auto">
            Cancel anytime, no fee
          </p>
        </div>

        <div
          className={`flex cursor-pointer flex-col rounded-xl border bg-itembg p-6 ${
            selected === "monthly" ? "border-blue" : "border-transparent"
          }`}
          onClick={() => setSelected("monthly")}
        >
          <input
            type="radio"
            name="subscription"
            value="monthly"
            checked={selected === "monthly"}
            className="hidden"
          />
          <p className="mb-6 text-xl font-semibold">Monthly</p>
          <p className="text-2xl font-semibold">₦5,500.00</p>

          <p className="mt-4 border-t-2 border-neutral2 pt-2 text-sm lg:mt-auto">
            Cancel anytime, no fee
          </p>
        </div>

        <div
          className={`flex cursor-pointer flex-col rounded-xl border bg-itembg p-6 ${
            selected === "yearly" ? "border-blue" : "border-transparent"
          }`}
          onClick={() => setSelected("yearly")}
        >
          <input
            type="radio"
            name="subscription"
            value="yearly"
            checked={selected === "yearly"}
            className="hidden"
          />
          <p className="mb-2 text-xl font-semibold">Yearly</p>
          <p>Billed monthly</p>
          <p className="text-lg font-semibold">
            ₦5,000.00 <span className="text-sm font-normal">/mo incl. VAT</span>
          </p>
          <p className="text-lg font-semibold">
            ₦60,000.00{" "}
            <span className="text-sm font-normal">/yr incl. VAT </span>
          </p>

          <p className="mt-4 border-t-2 border-neutral2 pt-2 text-sm">
            Cancel anytime, no fee
          </p>
        </div>
      </div>

      <p className="ml-auto mt-8 w-fit text-neutral2">Step 2 of 2</p>
    </section>
  );
};

export default PurchasePremium;
