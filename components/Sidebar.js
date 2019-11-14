import React from "react";

import theme from "../theme/theme";

const Sidebar = () => {
	return (
		<nav>
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
