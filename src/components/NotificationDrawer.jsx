import { Drawer } from "flowbite-react";
import NotificationComponent from "./NotificationComponent";
import { notification } from "@/constants";

const NotificationDrawer = ({ isOpen, handleClose }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      position="right"
      bodyscrolling="{false}"
      className="w-screen bg-teal text-white lg:max-w-[32vw]"
    >
      <Drawer.Header title={"Notifications"} titleIcon={() => <></>} />

      {notification.map(({ image, title, message, time }, index) => (
        <NotificationComponent
          key={index}
          image={image}
          title={title}
          message={message}
          time={time}
        />
      ))}
    </Drawer>
  );
};

export default NotificationDrawer;
