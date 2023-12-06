import { useEffect, useRef } from "react";

const usePrevious = (value: unknown, refreshOn: unknown) => {
  const ref = useRef<unknown>();

  useEffect(() => {
    ref.current = value;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshOn]);

  return ref.current;
};

export default usePrevious;
