import React, { useEffect } from "react";

import theme from "../theme/theme";

const Overlay = props => {
	useEffect(() => {
		if (props.displaySidebar) {
			document.querySelector(".overlay").classList.remove("disabled");
		} else {
			document.querySelector(".overlay").classList.add("disabled");
		}
	});

	return (
		<div className="overlay disabled">
			<style jsx>
				{`
					div {
						position: fixed;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						background: ${theme.colors.dark};
						opacity: 0.25;
						z-index: 50;
						transition: opacity 0.5s ease;
					}
				`}
			</style>
		</div>
	);
};

export default Overlay;
