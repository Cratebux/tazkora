import clsx from "clsx";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        "rounded-2xl bg-primary px-6 py-2 font-semibold text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
