/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { VirtualizedList } from "./components/virtualized-list/VirtualizedList";

function App() {
	return (
		<div
			css={{
				backgroundColor: "#e7e7e7",
				display: "flex",
				height: "calc(100vh - 8rem)",
				alignContent: "flex-start",
				justifyContent: "center",
				padding: "4rem",
			}}
		>
			<Global
				styles={css`
					body {
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
							"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
							"Helvetica Neue", sans-serif;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}
				`}
			/>
			<div
				css={{
					width: 1000,
					display: "flex",
					backgroundColor: "white",
				}}
			>
				<VirtualizedList />
			</div>
		</div>
	);
}

export default App;
