import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const Button = ({
  children,
  className,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      aria-label="button"
      aria-controls="button"
      {...restProps}
      className={clsx('bg-gradient-to-r hover:opacity-90 transition-opacity duration-300 to-[#7184FD] via-[#3F7AF0] font-normal text-md from-[#4F37EE] font-jost text-white max-w-48 focus:ring-0 focus:ring-white focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full px-4 py-2.5 rounded-lg', className)}
    >
      {children}
    </button>
  );
};
export default Button;
