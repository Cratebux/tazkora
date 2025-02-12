import clsx from "clsx";

const SectionParagraph = ({ className, children, ...props }) => {
  return (
    <p className={clsx("md:w-[70%] w-[90%] lg:w-[45%]", className)} {...props}>
      {children}
    </p>
  );
};

export default SectionParagraph;
