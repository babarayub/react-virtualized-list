import { css } from "@emotion/react";
import React, {
	cloneElement,
	LegacyRef,
	RefObject,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import {  useDebounce, useElementHeight } from "../_/helpers";

/** @jsxImportSource @emotion/react */
export const Container = () => {
	return (
		<div
			css={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				padding: "0rem 4rem",
			}}
		>
			<ActionBar />
			<List />
		</div>
	);
};

const columnStyle = css({
	display: "flex",
	flexGrow: 1,
	width: "33%",
	justifyContent: "center",
});

const listColumnStyle = css({
	height: "100%",
	alignItems: "center",
	border: "1px solid grey",
});

const buttonStyle = css({
	backgroundColor: "white",
	fontSize: 12,
	padding: 14,
	cursor: "pointer",
	fontWeight: 600,
});

export const ActionBar = () => {
	return (
		<div css={{ display: "flex", height: "7rem", alignItems: "center" }}>
			<div css={columnStyle}></div>
			<div css={[columnStyle, { fontWeight: 600, fontSize: 18 }]}>
				{" "}
				Virtualized list
			</div>
			<div css={[columnStyle, { justifyContent: "end" }]}>
				<button css={buttonStyle}> Add new item</button>
			</div>
		</div>
	);
};

export const ListItem = ({ id }: { id?: number }) => {
	return (
		<div
			css={{
				display: "flex",
				flexDirection: "row",
				height: "4rem",
				alignItems: "center",
			}}
		>
			<div css={[columnStyle, listColumnStyle]}> Item {id} </div>
			<div css={[columnStyle, listColumnStyle]}> Item1 Description {id}</div>
			<div css={[columnStyle, listColumnStyle]}> Item1 Price{id}</div>
		</div>
	);
};
// aka hack..
const listBorder = css({
	border: "3px solid grey",
	borderLeftWidth: 2,
	borderRightWidth: 2,
});

export const List = () => {
	return (
		<div css={listBorder}>
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
		</div>
	);
};

const bufferedItems = 2;

const VirtualizedList = ({
  rowHeight = 66,
  children,
}: {
  rowHeight?: number;
  children: Array<JSX.Element>;
}) => {
  const { setRef: containerRef, height: containerHeight = 0 } = useElementHeight();
  const [position, setPosition] = React.useState(0);

  const elements = React.useMemo(() => {
    const from = Math.max(
      Math.floor(position / rowHeight) - bufferedItems,
      0
    );
    const to = Math.min(
      Math.ceil((position + containerHeight) / rowHeight - 1) +
      bufferedItems,
      children.length - 1
    );

    return children.slice(from, to + 1).map((element, index) =>
      React.cloneElement(element, {
        style: {
          position: "absolute",
          display: 'flex',
          top: (from + index) * rowHeight + index * 0,
          height: rowHeight,
          width: '100%'
        }
      })
    );
  }, [
      children,
      containerHeight,
      rowHeight,
      position,
    ]);

useEffect(() => {
console.log(position, "position")
}, [position])



  const onScroll = React.useMemo(
    () => (e:any) => {
      setTimeout(() => {
        setPosition(e.target.scrollTop);
      }, 60);
    },
    []
  );

  return (
    <div
      onScroll={onScroll}
      style={{
        overflowY: "scroll",
        position: "relative",
        width: '100%'
      }}
      ref={containerRef}
      className="container"
    >
      {elements}
    </div>
  );
};

const DATA = Array(100)
.fill(0)
.map((_, idx) => ({ id: idx }))
export const Demo = () => {
	return (
    <VirtualizedList
    rowHeight={60}
  >
    {DATA.map((it) => (
        <div
          key={it.id}
          css={{width: '100%'}}
        >
          <ListItem id={it.id} />
        </div>
      ))}
  </VirtualizedList>
	);
};
