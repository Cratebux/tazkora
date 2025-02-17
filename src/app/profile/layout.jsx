import ProfileFooter from "@/components/profile/ProfileFooter";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileSideBar from "@/components/profile/ProfileSideBar";

export default function ProfileLayout({ children }) {
  return (
    <section className="min-h-screen bg-profilebg px-6 text-white lg:px-16">
      <ProfileHeader />

      <main className="flex items-start gap-6">
        <ProfileSideBar/>

        <div className="min-h-[75vh] w-full lg:w-[75%]">{children}</div>
      </main>

      <ProfileFooter />
    </section>
  );
}
