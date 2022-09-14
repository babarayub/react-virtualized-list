/** @jsxImportSource @emotion/react */
export const VirtualizedList = () => {
	return (
		<div>
			<ActionBar />
			<List />
		</div>
	);
};

export const ActionBar = () => {
	return (
		<div>
			<div> Virtualized list</div>
			<div>
				<button> Add new item</button>
			</div>
		</div>
	);
};

export const ListItem = () => {
	return (
		<div>
			<div> Item1 </div>
			<div> Item1 Description</div>
			<div> Item1 Price</div>
		</div>
	);
};

export const List = () => {
	return (
		<div>
			<ListItem />
			<ListItem />
			<ListItem />
		</div>
	);
};
