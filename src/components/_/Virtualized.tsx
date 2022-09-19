/** @jsxImportSource @emotion/react */

import {
	useState,
	useMemo,
	cloneElement,
	useRef,
} from "react";
import { useElementSize } from "./helpers";

const BUFFERED_ITEMS = 0;

export const Virtualized = 
	(
		{
			rowHeight = 64,
			height,
			children,
		}: {
			rowHeight?: number;
			height?: number;
			children: Array<JSX.Element>;
		},
	) => {
		const containerHeight = useRef<number>(rowHeight * children.length);
    const { setRef: containerRef, size} =
	useElementSize();
		const [position, setPosition] = useState(0);
		const elements = useMemo(() => {
				const from = Math.max(
					Math.floor(position / rowHeight) - BUFFERED_ITEMS,
					0
				);
				const to = Math.min(
					Math.ceil((position + size.height) / rowHeight - 1) +
						BUFFERED_ITEMS,
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
				css={{ height: '100%', width: "100%", overflowY: "scroll" }}
        ref={containerRef}
				onScroll={onScroll}
			>
				<div
					style={{
						display: "flex",
						position: "relative",
						width: "100%",
						height: containerHeight.current,
					}}
				>
					<div css={{ height: '100%' }}>{elements}</div>
				</div>
			</div>
		);
	};

