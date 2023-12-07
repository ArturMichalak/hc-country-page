import { ChangeEventHandler, memo } from "react";

import ToggleChip from "@/components/toggle-chip";

interface RegionsFilterProps {
  toggleState: { [key: string]: boolean };
  toggleFn: ChangeEventHandler<HTMLInputElement>;
}

function RegionsFilter({ toggleFn, toggleState }: RegionsFilterProps) {
  return (
    <fieldset>
      <legend className="mb-4">Region</legend>
      <div className="flex flex-wrap gap-3">
        {Object.keys(toggleState).map((key) => (
          <ToggleChip
            key={key}
            id={key}
            checked={toggleState[key]}
            onChange={toggleFn}
            label={key}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default memo(RegionsFilter);
