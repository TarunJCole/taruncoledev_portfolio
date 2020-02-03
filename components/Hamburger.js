import React from "react";

export const Hamburger = () => {
	return (
		<div className="hamburger disabled" onClick={() => props.toggleSidebar(!props.displaySidebar)}>
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
						background: ${theme.colors.secondary.light};
						border-radius: 50%;
						transition: background 0.2s ease-in-out;
						z-index: 100;
					}

					.hamburger:hover {
						color: ${theme.colors.primary.main};
					}

					.hamburger-line {
						width: 35px;
						height: 5px;
						background-color: ${theme.colors.dark};
						margin: 3px 0;
						border-radius: 3px;
					}
				`}
			</style>
		</div>
	);
};
