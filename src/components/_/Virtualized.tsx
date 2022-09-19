/** @jsxImportSource @emotion/react */

import { useState, useMemo, cloneElement } from "react";
import { useElementSize } from "./helpers";

const BUFFERED_ITEMS = 0;

export const Virtualized = ({
	rowHeight = 64,
	children,
}: {
	rowHeight?: number;
	children: Array<JSX.Element>;
}) => {
	const { setRef: containerRef, size} =
	useElementSize();
	const [position, setPosition] = useState(0);
	const elements = useMemo(() => {
		const from = Math.max(Math.floor(position / rowHeight) - BUFFERED_ITEMS, 0);
		const {height: containerHeight} = size;
		const to = Math.min(
			Math.ceil((position + containerHeight) / rowHeight - 1) + BUFFERED_ITEMS,
			children.length - 1
		);

		return children.slice(from, to + 1).map((element, index) =>
			cloneElement(element, {
				style: {
					position: "absolute",
					display: "flex",
					top: (from + index) * rowHeight + index * 4,
					width: "100%",
				},
			})
		);
	}, [children, size, rowHeight, position]);

	const onScroll = useMemo(
		() => (e: any) => {
			setTimeout(() => {
				setPosition(e.target.scrollTop);
			}, 20);
		},
		[]
	);

	return (
		<div
			onScroll={onScroll}
			style={{
				display: "flex",
				overflowY: "scroll",
				position: "relative",
				width: "100%",
			}}
			ref={containerRef}
		>
			{elements}
		</div>
	);
};
