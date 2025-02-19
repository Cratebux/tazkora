"use client";
import ProfileFooter from "@/components/profile/ProfileFooter";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileSideBar from "@/components/profile/ProfileSideBar";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ProfileLayout({ children }) {
  const [sidebaropen, setSidebaropen] = useState();
  const pathname = usePathname();
  return (
    <section className="min-h-screen bg-profilebg px-6 text-white lg:px-16">
      <ProfileHeader />

      <main className="lg:hidden">
        {sidebaropen ? (
          <ProfileSideBar setSidebaropen={setSidebaropen} />
        ) : (
          <>
            {pathname !== "/profile/premium/purchase" && (
              <button
                className="mb-6 flex items-center gap-2"
                onClick={() => setSidebaropen(true)}
              >
                <ArrowLeft />
                <span>Back</span>
              </button>
            )}

            {children}
          </>
        )}
      </main>

      <main className="hidden items-start gap-10 lg:flex">
        <ProfileSideBar />

        <div className="min-h-[75vh] lg:w-[72%]">{children}</div>
        {/* w-full  */}
      </main>

      <ProfileFooter />
    </section>
  );
}
