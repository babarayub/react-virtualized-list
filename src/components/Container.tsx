/** @jsxImportSource @emotion/react */
import React, {  useState } from "react";
import { ActionBar } from "./_/ActionBar";
import { generateDummyData, Item, listBorderStyle } from "./_/helpers";
import { ListItem } from "./_/ListItem";
import { Virtualized } from "./_/Virtualized";

const DATA = generateDummyData();
export const Container = () => {
	const [data, setData] = useState<Item[]>(DATA);
	return (
		<div
			css={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				padding: "0rem 4rem",
			}}
		>
			<ActionBar
				click={() => {
					setData([
						...data,
						{
							id: data.length + 1,
							item: `Item ${data.length + 1}`,
							desc: `item ${data.length + 1} description`,
							price: `item ${data.length + 1} price`,
						},
					]);
				}}
			/>
			<div
				css={[
					listBorderStyle,
					{
						height: "calc(100% - 9rem)",
						display: "flex",
						flexDirection: "column",
						width: "100%",
					},
				]}
			>
				<div css={{ width: "calc(100% - 15px)" }}>
					<ListItem
						isHeader
						data={{
							id: 0,
							item: "Column 1",
							desc: "Column 2",
							price: "Column 3",
						}}
					/>
				</div>

				<div
					css={{ height: "calc(100% - 4rem)", display: "flex", width: "100%" }}
				>
					<VirtualizedList data={data} />
				</div>
			</div>
		</div>
	);
};

export const VirtualizedList = ({ data }: { data: Item[] }) => (
	<div css={{ height: "100%", width: "100%" }}>
		<Virtualized rowHeight={60}>
			{data.map((row) => (
				<div key={row.id} css={{ width: "100%" }}>
					<ListItem data={row} />
				</div>
			))}
		</Virtualized>
	</div>
);
