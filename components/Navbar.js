import React from "react";
import Link from "next/link";

import theme from "../theme/theme";

const Navbar = props => {
	return (
		<header>
			<nav className="container">
				<div>
					<Link href="/">Tarun Cole</Link>
				</div>
				<ul>
					<li>
						<Link href="/" aria-label="home">
							<span>Home</span>
						</Link>
					</li>
					<li>
						<Link href="/about" aria-label="about">
							<span>About</span>
						</Link>
					</li>
					<li>
						<Link href="/projects" aria-label="work">
							<span>Projects</span>
						</Link>
					</li>
					<li>
						<Link href="/contact" aria-label="contact">
							<span>Contact</span>
						</Link>
					</li>
				</ul>
			</nav>
			<style jsx>
				{`
					header {
						position: fixed;
						top: 0;
						width: 100vw;
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

					ul li span {
						padding-bottom: 0.25rem;
						border-bottom: 2px solid transparent;
						cursor: pointer;
					}

					ul li span:hover {
						border-bottom: 2px solid ${theme.colors.primary.main};
					}
				`}
			</style>
		</header>
	);
};

export default Navbar;
