import { css } from "@emotion/react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
export type Item = {
  id: number,
  item: string;
  desc: string;
  price: string;
}

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
		setHeight(ref?.offsetHeight || 0);
	}, [ref?.offsetHeight]);

	useLayoutEffect(() => {
		window.addEventListener("resize", handleSize);
		return () => window.removeEventListener("resize", handleSize);
	}, []);

	useLayoutEffect(() => {
		handleSize();
	}, [ref?.offsetHeight]);

	return { setRef, height };
};

export const generateDummyData = (count: number = 100000): Item[] =>
	Array(count)
		.fill(0)
		.map((_, idx) => ({
			id: idx + 1,
			item: `Item ${idx + 1}`,
			desc: `item ${idx + 1} description`,
			price: `item ${idx + 1} price`,
		}));


    export const listBorderStyle = css({
      border: "3px solid grey",
      borderLeftWidth: 2,
      borderRightWidth: 2,
    });
    export const columnStyle = css({
      display: "flex",
      flexGrow: 1,
      width: "33%",
      justifyContent: "center",
    });
    
    export const listColumnStyle = css({
      height: "100%",
      alignItems: "center",
      border: "1px solid grey",
    });
    
    export const buttonStyle = css({
      backgroundColor: "white",
      fontSize: 12,
      padding: 14,
      cursor: "pointer",
      fontWeight: 600,
    });