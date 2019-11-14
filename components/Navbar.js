import React from "react";
import { animateScroll as scroll } from "react-scroll";

import Sidebar from "./Sidebar";

import theme from "../theme/theme";

const Navbar = () => {
	return (
		<header>
			<Sidebar />
			<div className="nav-title">
				<a onClick={() => scroll.scrollToTop()} aria-label="Scroll To Top">
					TC
				</a>
			</div>
			<div className="hamburger">
				<div className="hamburger-line"></div>
				<div className="hamburger-line"></div>
				<div className="hamburger-line"></div>
			</div>
			<style jsx>
				{`
					header {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 1rem 2rem;
						width: 100vw;
						position: fixed;
						top: 0;
						left: 0;
						z-index: 100;
					}

					.nav-title {
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 2rem;
						width: 60px;
						height: 60px;
						background: ${theme.colors.secondary.main};
						border-radius: 50%;
						transition: background 0.2s ease-in-out;
					}

					.hamburger {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						width: 60px;
						height: 60px;
						background: ${theme.colors.secondary.main};
						border-radius: 50%;
						transition: background 0.2s ease-in-out;
						z-index: 100;
					}

					.nav-title:hover,
					.hamburger:hover {
						background: ${theme.colors.primary.light};
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
		</header>
	);
};

export default Navbar;
