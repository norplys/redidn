import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  classname?: string;
  children?: React.ReactNode;
  isOnNav?: boolean;
};

export function Button({ props, classname, children, isOnNav }: ButtonProps) {
  return (
    <button
      className={clsx(
        isOnNav ? "py-2 px-4" : "px-2 py-1",
        "hover:scale-105 rounded-full transition-transform duration-200",
        classname
      )}
      {...props}
    >
      {children}
    </button>
  );
}
