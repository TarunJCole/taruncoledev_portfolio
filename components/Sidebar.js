import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

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
				<li>
					<ScrollLink to="__next" smooth={true}>
						<span>Home</span>
					</ScrollLink>
				</li>
				<li>
					<ScrollLink to="about" smooth={true}>
						<span>About Me</span>
					</ScrollLink>
				</li>
				<li>
					<ScrollLink to="projects" smooth={true}>
						<span>Projects</span>
					</ScrollLink>
				</li>
				<li>
					<ScrollLink to="contact" smooth={true}>
						<span>Contact</span>
					</ScrollLink>
				</li>
			</ul>
			<ul>
				<li>
					<a href="https://github.com/TarunJCole">Github</a>
				</li>
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

					ul li:after {
						content: "";
						display: block;
						width: 0;
						height: 2px;
						background: ${theme.colors.primary.main};
						transition: width 0.2s ease;
					}

					ul li:hover {
						color: ${theme.colors.primary.maint};
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
