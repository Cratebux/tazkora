import clsx from "clsx";

const SectionHeading = ({ className, children, ...props }) => {
  return (
    <h2
      className={clsx("text-3xl font-bold lg:text-4xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
