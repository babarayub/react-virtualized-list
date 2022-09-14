/** @jsxImportSource @emotion/react */

import { columnStyle, Item, listColumnStyle } from "./helpers";

export const ListItem = ({
	data: { item, desc, price },
	isHeader = false,
}: {
	data: Item;
	isHeader?: boolean;
}) => {
	return (
		<div
			css={[
				{
					display: "flex",
					flexDirection: "row",
					height: "4rem",
					width: "100%",
					alignItems: "center",
				},
				{ ...(isHeader && { borderBottom: "3px solid grey" }) },
			]}
		>
			<div css={[columnStyle, listColumnStyle]}> {item}</div>
			<div css={[columnStyle, listColumnStyle]}> {desc}</div>
			<div css={[columnStyle, listColumnStyle]}> {price}</div>
		</div>
	);
};
