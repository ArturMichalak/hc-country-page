import { ChangeEventHandler, memo } from "react";
import Checkbox from "../checkbox";

interface StatusFilterProps {
  toggleState: { [key: string]: boolean };
  toggleFn: ChangeEventHandler<HTMLInputElement>;
  labels: {[key: string]: string}
}

function StatusFilter({ toggleFn, toggleState, labels }: StatusFilterProps) {
  return (
    <fieldset>
      <legend className="mb-4">Status</legend>
      <div className="flex flex-wrap flex-col gap-3">
        {Object.keys(toggleState).map((key) => (
          <Checkbox
            id={key}
            key={key}
            onChange={toggleFn}
            label={labels[key]}
            checked={toggleState[key]}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default memo(StatusFilter);
