import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

import theme from "../theme/theme";

const Navbar = props => {
	return (
		<header>
			<div className="nav-title">
				<a onClick={() => scroll.scrollToTop()} aria-label="Scroll To Top" className="title-font">
					TC
				</a>
			</div>
			<div className="nav-items title-font">
				<ul>
					<li>
						<Link href="/">
							<a aria-label="Home">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a aria-label="About Me">About Me</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a aria-label="Projects">Projects</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a aria-label="Contact">Contact</a>
						</Link>
					</li>
				</ul>
				<ul>
					<li className="icon-container">
						<a href="https://github.com/TarunJCole">
							<img src="./GitHub-Mark-64px.png" alt="Github Icon" />
						</a>
					</li>
				</ul>
			</div>
			<div
				className="hamburger disabled"
				onClick={() => props.toggleSidebar(!props.displaySidebar)}
			>
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
						padding: 0 2rem;
						width: 100vw;
						position: fixed;
						top: 0;
						left: 0;
						z-index: 200;
					}

					.nav-title {
						font-size: 2.5rem;
						transition: color 0.2s ease-in-out;
					}

					.nav-items {
						display: flex;
						margin-left: auto;
					}

					.nav-items ul {
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 1.75rem;
					}

					.nav-items ul li {
						margin: 0 1rem;
						transition: color 0.2s ease-in-out;
					}

					.nav-items ul li::after {
						content: "";
						display: block;
						width: 0;
						height: 2px;
						background: ${theme.colors.primary.main};
						transition: width 0.2s ease;
					}

					.nav-items ul li:hover {
						color: ${theme.colors.primary.main};
					}

					.nav-items ul li:hover::after {
						width: 100%;
					}

					.nav-items img {
						height: 45px;
						width: 45px;
					}

					.nav-items .icon-container {
						height: 45px;
						width: 45px;
					}

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

					.nav-title:hover,
					.hamburger:hover {
						color: ${theme.colors.primary.maint};
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
