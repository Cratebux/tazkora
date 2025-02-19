"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`space-y-20 px-6 pb-6 pt-20 text-white lg:px-20 ${pathname !== "/business" ? "bg-primary" : "bg-black"}`}
    >
      <div className="flex flex-col items-start justify-between gap-10 text-left lg:flex-row lg:items-start lg:gap-0">
        <Image
          src="/svg/tazkora-white.svg"
          alt="logo"
          width={240}
          height={80}
        />

        <div>
          <h2 className="mb-3 text-2xl font-semibold">EARN MONEY</h2>
          <ul className="space-y-1.5">
            <li>All microtasks</li>
            <li>Social media tasks</li>
            <li>Watch videos</li>
            <li>Take surveys</li>
            <li>Play games</li>
            <li>Test products</li>
            <li>Make translations</li>
            <li>Train AI</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">HOW IT WORKS</h2>
          <ul className="space-y-1.5">
            <li>How to earn</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">FOR BUSINESS</h2>
          <ul className="space-y-1.5">
            <li>Our services</li>
            <li>Get in touch</li>
            <li>Social media growth</li>
            <li>Website traffic</li>
            <li>App installs</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">COMPANY</h2>
          <ul className="space-y-1.5">
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-6 overflow-hidden lg:flex-row lg:justify-between lg:gap-0">
        <p className="text-sm">© 2025, Tazkora.  Terms & Privacy policy.</p>

        <div className="flex w-full items-center justify-between lg:w-auto lg:justify-start lg:gap-6">
          <Link href="https://x.com/tazkora_ng" target="_blank">
            <Image src="/svg/x.svg" alt="social icon" width={28} height={28} />
          </Link>

          <Link href="https://discord.gg/z9Svhtgs" target="_blank">
            <Image
              src="/svg/discord.svg"
              alt="social icon"
              width={28}
              height={28}
            />
          </Link>

          <Link href="https://t.me/tazkora" target="_blank">
            <Image
              src="/svg/telegram.svg"
              alt="social icon"
              width={28}
              height={28}
            />
          </Link>

          <Link href="https://www.instagram.com/tazkora" target="_blank">
            <Image
              src="/svg/instagram.svg"
              alt="social icon"
              width={28}
              height={28}
            />
          </Link>

          <Link
            href="https://www.tiktok.com/@tazkora?_r=1&_d=eh8cle1d9la94c&sec_uid=MS4wLjABAAAAZvNeyIFsSrHPL7oGDTtxQuFbHWy2rulj2nM2X4Hi9qcGqB5NbdkIvIof7rh7kZgM&share_author_id=7299903278979007493&sharer_language=en&source=h5_m&u_code=eb2a7ajhfhg4g1&timestamp=1739017446&user_id=7299903278979007493&sec_user_id=MS4wLjABAAAAZvNeyIFsSrHPL7oGDTtxQuFbHWy2rulj2nM2X4Hi9qcGqB5NbdkIvIof7rh7kZgM&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7457480587655595782&share_link_id=30ecb013-bfa8-48a7-8cf7-361d3c496421&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1
"
            target="_blank"
          >
            <Image
              src="/svg/tiktok.svg"
              alt="social icon"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
