import React from "react";

import theme from "../theme/theme";

const Overlay = () => {
	return (
		<div className="overlay">
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
					}
				`}
			</style>
		</div>
	);
};

export default Overlay;
