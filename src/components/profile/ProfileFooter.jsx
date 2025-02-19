import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileFooter = () => {
  return (
    <footer className="hidden lg:flex w-full flex-col items-center gap-6 overflow-hidden border-t border-[#2A2B33] py-4 lg:flex-row lg:justify-between lg:gap-0">
      <ul className="flex w-full items-center justify-between text-sm lg:w-auto lg:justify-start lg:gap-6">
        <li>Tazkora.com</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Help Center</li>
      </ul>

      <div className="flex w-full items-center justify-between lg:w-auto lg:justify-start lg:gap-6">
        <Link href="https://x.com/tazkora_ng" target="_blank">
          <Image src="/svg/x.svg" alt="social icon" width={22} height={22} />
        </Link>

        <Link href="https://discord.gg/cRCse5Eb" target="_blank">
          <Image
            src="/svg/discord.svg"
            alt="social icon"
            width={22}
            height={22}
          />
        </Link>

        <Link href="https://t.me/tazkora" target="_blank">
          <Image
            src="/svg/telegram.svg"
            alt="social icon"
            width={22}
            height={22}
          />
        </Link>

        <Link href="https://www.instagram.com/tazkora" target="_blank">
          <Image
            src="/svg/instagram.svg"
            alt="social icon"
            width={22}
            height={22}
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
            width={22}
            height={22}
          />
        </Link>
      </div>
    </footer>
  );
};

export default ProfileFooter;
