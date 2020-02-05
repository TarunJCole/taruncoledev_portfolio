import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import theme from "../theme/theme";

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
			</nav>
			<style jsx>
				{`
					header {
						position: fixed;
						top: 0;
						width: 100%;
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
				`}
			</style>
		</header>
	);
};

export default Navbar;
