import classNames from "classnames";
import { InputHTMLAttributes, forwardRef } from "react";

const Checkbox = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label: string;
  }
>(function Checkbox({ id, className, label, ...props }, ref) {
  return (
    <div className="flex">
      <input
        id={id}
        ref={ref}
        className={"sr-only peer"}
        type="checkbox"
        {...props}
      />
      <label
        className={classNames(
          "flex items-center gap-3 text-iron cursor-pointer before:w-6 before:aspect-square before:rounded before:border-2 before:border-shark-light peer-focus:before:border-cornflower-blue peer-focus:text-cornflower-blue peer-checked:before:border-cornflower-blue peer-checked:before:bg-cornflower-blue peer-checked:before:bg-done peer-checked:before:bg-center peer-checked:before:bg-cover",
          className
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
});

export default Checkbox;
