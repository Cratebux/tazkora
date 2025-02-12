import Image from "next/image";

const InfoCard = ({ className, icon, smallText, title, desc, bgCol }) => {
  return (
    <div
      style={{ backgroundColor: bgCol }}
      className={`flex w-full lg:max-w-[22%] flex-col gap-20 rounded-2xl px-4 py-6 text-white ${className}`}
    >
      <Image src={icon} alt="icon" width={70} height={70} />

      <div>
        <p className="mb-2 text-sm">{smallText}</p>
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
