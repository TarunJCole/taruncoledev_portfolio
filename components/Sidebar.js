import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import theme from "../theme/theme";

const Sidebar = props => {
	const router = useRouter();

	useEffect(() => {
		if (props.displaySidebar) {
			document.querySelector(".sidebar").classList.remove("hidden");
		} else {
			document.querySelector(".sidebar").classList.add("hidden");
		}
	});

	return (
		<nav className="sidebar hidden">
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
			<ul>
				<li>
					<a href="https://www.twitter.com/taruncoledev">Twitter</a>
				</li>
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
						background: #2b2b2bdd;
						height: 100vh;
						width: 100%;
						min-width: 320px;
						z-index: 50;
						transition: transform 0.3s ease-in-out;
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

					ul li a.selected {
						border-bottom: 2px solid ${theme.colors.primary.light};
					}

					.hidden {
						transform: translateY(-100vh);
					}
				`}
			</style>
		</nav>
	);
};

export default Sidebar;
