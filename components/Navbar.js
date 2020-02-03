import React from "react";
import Link from "next/link";

import theme from "../theme/theme";

const Navbar = props => {
	return (
		<header>
			<nav className="container">
				<div>
					<Link href="/">
						<a aria-label="home">Tarun Cole</a>
					</Link>
				</div>
				<ul>
					<li>
						<Link href="/">
							<a aria-label="home">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a aria-label="about">About</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a aria-label="work">Projects</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a aria-label="contact">Contact</a>
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
				`}
			</style>
		</header>
	);
};

export default Navbar;
