import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
};


export const useElementHeight = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>();
  const handleSize = useCallback(() => {
    setHeight(ref ?.offsetHeight || 0);
  }, [ref?.offsetHeight]);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useLayoutEffect(() => {
    handleSize();
  }, [ref?.offsetHeight]);

  return {setRef, height};
}





