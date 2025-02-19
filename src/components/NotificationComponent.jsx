import Image from "next/image";

const NotificationComponent = ({ image, title, message, time }) => {
  return (
    <div className="flex items-start gap-4 border-b border-[#323432] px-2 py-3">
      <Image
        className="min-w-[12%]"
        src={image}
        alt="notification icon"
        width={50}
        height={50}
      />

      <div className="w-fit space-y-1">
        <h3>
          <b>{title} </b>
        </h3>

        <p className="text-neutral2">{message}</p>
      </div>

      <div className="ml-auto text-neutral2">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default NotificationComponent;
