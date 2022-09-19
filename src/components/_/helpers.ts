import { css } from "@emotion/react";
import { useCallback, useLayoutEffect, useState } from "react";
export type Item = {
	id: number;
	item: string;
	desc: string;
	price: string;
};

export const useElementSize = () => {
	const [ref, setRef] = useState<HTMLDivElement | null>(null);
	const [size, setSize] = useState<{
		width: number;
		height: number;
	}>({
		width: 0,
		height: 0,
	});
	const handleSize = useCallback(() => {
		if (ref?.getBoundingClientRect()) {
			const { width, height } = ref?.getBoundingClientRect();
			setSize({
				width,
				height,
			});
		}
	}, [ref]);

	useLayoutEffect(() => {
		handleSize();
		window.addEventListener("resize", handleSize);
		return () => window.removeEventListener("resize", handleSize);
	}, [ref]);

	return { setRef, size };
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
