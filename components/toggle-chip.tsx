import classNames from "classnames";
import { InputHTMLAttributes, forwardRef } from "react";

const ToggleChip = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label: string;
  }
>(function ToggleChip({ className, label, ...props }, ref) {
  return (
    <div className="flex">
      <input ref={ref} className="sr-only peer" type="checkbox" {...props} />
      <label
        className="peer-checked:bg-shark-light peer-checked:text-iron px-3 py-[10px] border border-transparent peer-checked:border-shark-light peer-focus:border-cornflower-blue peer-focus:text-cornflower-blue rounded-xl cursor-pointer"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
});

export default ToggleChip;
