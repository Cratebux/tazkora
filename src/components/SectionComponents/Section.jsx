import clsx from "clsx";

const Section = ({ className, children, ...props }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-4 text-center lg:gap-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Section;
