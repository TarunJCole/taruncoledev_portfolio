import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import theme from "../theme/theme";
import Hamburger from "./Hamburger";

const Navbar = props => {
	const router = useRouter();

	return (
		<header>
			<nav className="container">
				<div className="title">
					<Link href="/">
						<a aria-label="home">TARUN COLE</a>
					</Link>
				</div>
				<ul>
					<li>
						<Link href="/">
							<a aria-label="home" className={router.pathname === "/" ? "selected" : ""}>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a aria-label="about" className={router.pathname === "/about" ? "selected" : ""}>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a aria-label="work" className={router.pathname === "/projects" ? "selected" : ""}>
								Projects
							</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a aria-label="contact" className={router.pathname === "/contact" ? "selected" : ""}>
								Contact
							</a>
						</Link>
					</li>
				</ul>
				<div className="hamburger-container">
					<Hamburger
						displaySidebar={props.displaySidebar}
						setDisplaySidebar={props.setDisplaySidebar}
					/>
				</div>
			</nav>
			<style jsx>
				{`
					header {
						position: fixed;
						top: 0;
						width: 100%;
						z-index: 75;
					}

					nav {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 1.25rem;
					}

					nav ul {
						display: flex;
						align-items: center;
					}

					ul li {
						margin: 0 1.5rem;
					}

					ul li:last-child {
						margin-right: 0;
					}

					ul li a {
						padding-bottom: 0.25rem;
						border-bottom: 2px solid transparent;
						cursor: pointer;
						transition: border 0.3s ease;
					}

					ul li a:hover {
						border-bottom: 2px solid ${theme.colors.primary.main};
					}

					ul li a.selected {
						border-bottom: 2px solid ${theme.colors.primary.main};
					}

					.title {
						text-transform: uppercase;
						font-family: "Josefin Slab", serif;
						font-size: 1.5rem;
						margin-top: 0.25rem;
					}

					.title a {
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.hamburger-container {
						display: none;
					}

					@media only screen and (max-width: 1150px) {
						header {
							padding: 0 1rem;
						}
					}

					@media only screen and (max-width: 700px) {
						nav ul {
							display: none;
						}

						.hamburger-container {
							display: block;
						}
					}
				`}
			</style>
		</header>
	);
};

export default Navbar;
