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
				<li>Stuff</li>
				<li>Stuff</li>
				<li>Stuff</li>
				<li>Stuff</li>
			</ul>
			<style jsx>
				{`
					nav {
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
						color: ${theme.colors.light};
						text-transform: uppercase;
						font-weight: bold;
						font-size: 1.5rem;
					}
				`}
			</style>
		</nav>
	);
};

export default Sidebar;
