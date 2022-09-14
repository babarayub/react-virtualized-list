import { css } from "@emotion/react";

/** @jsxImportSource @emotion/react */
export const VirtualizedList = () => {
	return (
		<div css={{ display: "flex", flexDirection: "column", width: "100%",     padding: '0rem 4rem' }}>
			<ActionBar />
			<List />
		</div>
	);
};

const columnStyle = css({
	display: 'flex',
  flexGrow: 1,
	width: "33%",
  justifyContent: 'center'
});



const listColumnStyle = css({
  height: '100%',
  alignItems: 'center',
  border: '1px solid grey'
})


const buttonStyle = css({
  backgroundColor: 'white',
  fontSize: 12,
  padding: 14,
  cursor: 'pointer',
  fontWeight: 600,
})

export const ActionBar = () => {
	return (
		<div css={{ display: "flex", height: "7rem", alignItems: 'center' }}>
			<div css={columnStyle}></div>
			<div css={[columnStyle, {fontWeight: 600, fontSize: 18}]}> Virtualized list</div>
			<div css={[columnStyle, {justifyContent: 'end'}]}>
				<button css={buttonStyle}> Add new item</button>
			</div>
		</div>
	);
};

export const ListItem = () => {
	return (
		<div css={{display: 'flex', flexDirection: 'row', height: '4rem', alignItems: 'center'}}>
			<div css={[columnStyle, listColumnStyle]}> Item1 </div>
			<div css={[columnStyle, listColumnStyle]}> Item1 Description</div>
			<div css={[columnStyle, listColumnStyle]}> Item1 Price</div>
		</div>
	);
};
// aka hack..
const listBorder =css({
  border: '3px solid grey',
  borderLeftWidth: 2,
  borderRightWidth: 2,
})

export const List = () => {
	return (
		<div css={listBorder}>
			<ListItem />
			<ListItem />
			<ListItem />
		</div>
	);
};
