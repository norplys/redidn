import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  classname?: string;
  children?: React.ReactNode;
};

export function Button({ props, classname, children }: ButtonProps) {
  return (
    <button
      className={clsx(
        "hover:scale-105 py-2 px-4 rounded-full transition-transform duration-200",
        classname
      )}
      {...props}
    >
      {children}
    </button>
  );
}
