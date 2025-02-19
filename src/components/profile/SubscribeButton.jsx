'use client'
import { redirect } from "next/navigation";

const SubscribeButton = () => {
  return (
    <button
      className="mt-6 w-full bg-blue py-3 text-xl font-semibold text-white"
      onClick={() => redirect("/profile/premium/purchase")}
    >
      Start your free trail
    </button>
  );
};

export default SubscribeButton;
