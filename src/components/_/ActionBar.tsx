/** @jsxImportSource @emotion/react */

import { buttonStyle, columnStyle } from "./helpers";

export const ActionBar = ({click}:{click: () => void}) => {
	return (
		<div css={{ display: "flex", height: "7rem", alignItems: "center" }}>
			<div css={columnStyle}></div>
			<div css={[columnStyle, { fontWeight: 600, fontSize: 18 }]}>
				{" "}
				Virtualized list
			</div>
			<div css={[columnStyle, { justifyContent: "end" }]}>
				<button css={buttonStyle} onClick={click}> Add new item</button>
			</div>
		</div>
	);
};