import React, { useEffect } from "react";

import theme from "../theme/theme";

const Sidebar = props => {
	useEffect(() => {
		if (props.displaySidebar) {
			document.querySelector(".sidebar").classList.remove("disabled");
		} else {
			document.querySelector(".sidebar").classList.add("disabled");
		}
	});

	return (
		<nav className="sidebar disabled">
			<ul>
				<li>Home</li>
				<li>About Me</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
			<ul>
				<li>Github</li>
			</ul>
			<style jsx>
				{`
					nav {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						position: fixed;
						top: 0;
						right: 0;
						background: ${theme.colors.dark};
						height: 100vh;
						width: 25%;
						min-width: 320px;
						z-index: 100;
						transition: opacity 0.2s ease-in-out;
					}

					ul {
						padding: 0;
						color: ${theme.colors.light};
						text-transform: uppercase;
						font-weight: bold;
						font-size: 1.5rem;
					}

					ul li {
						margin: 2rem 0;
						text-align: center;
						transition: color 0.2s ease-in-out;
						cursor: pointer;
					}

					ul li::after {
						content: "";
						display: block;
						width: 0;
						height: 2px;
						background: ${theme.colors.primary.light};
						transition: width 0.2s ease;
					}

					ul li:hover {
						color: ${theme.colors.primary.light};
					}

					ul li:hover::after {
						width: 100%;
					}
				`}
			</style>
		</nav>
	);
};

export default Sidebar;
