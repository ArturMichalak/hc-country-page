import { ChangeEventHandler, memo } from "react";

interface SortProps {
  sortBy: string;
  sortFn: ChangeEventHandler<HTMLSelectElement>;
}

function Sort({ sortBy, sortFn }: SortProps) {
  return (
    <label className="flex flex-col">
      Sort by
      <div className="rounded-xl border-2 border-shark-light px-[14px] py-[10px] mt-[11px]">
        <select
          value={sortBy[0].toUpperCase() + sortBy.slice(1)}
          onChange={sortFn}
          className="w-full text-sm leading-3 cursor-pointer"
        >
          <option className="bg-shark">Population</option>
          <option>Area</option>
          <option>Region</option>
          <option>Name</option>
        </select>
      </div>
    </label>
  );
}

export default memo(Sort);
