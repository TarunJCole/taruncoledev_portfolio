import React, { useEffect } from "react";

import theme from "../theme/theme";

const Hamburger = props => {
	useEffect(() => {
		if (props.displaySidebar) {
			document.querySelectorAll(".hamburger-line").forEach(line => line.classList.add("light"));
		} else {
			document.querySelectorAll(".hamburger-line").forEach(line => line.classList.remove("light"));
		}
	});

	return (
		<div className="hamburger" onClick={() => props.setDisplaySidebar(!props.displaySidebar)}>
			<div className="hamburger-line"></div>
			<div className="hamburger-line"></div>
			<div className="hamburger-line"></div>
			<style jsx>
				{`
					.hamburger {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						width: 60px;
						height: 60px;
						border-radius: 50%;
						transition: background 0.2s ease-in-out;
						z-index: 75;
					}

					.hamburger-line {
						width: 35px;
						height: 5px;
						background-color: ${theme.colors.dark};
						margin: 3px 0;
						border-radius: 3px;
						transition: background 0.3s ease-in-out;
					}

					.light {
						background-color: ${theme.colors.light};
					}
				`}
			</style>
		</div>
	);
};

export default Hamburger;
