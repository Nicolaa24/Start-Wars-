import React from "react";


export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => {
      clearInterval(handler)
    }

  }, [value, delay]);
  
  return debouncedValue;
};
  