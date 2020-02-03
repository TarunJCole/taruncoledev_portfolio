import React from "react";
import Link from "next/link";

import theme from "../theme/theme";

const Landing = () => {
	return (
		<section className="container">
			<div className="title-area">
				<h1>
					Tarun Cole
					<br />
					Web Developer
				</h1>
				<div className="title-links">
					<Link href="/projects">
						<a className="btn" aria-label="See Projects">
							See Projects
						</a>
					</Link>
					<Link href="/contact">
						<a className="btn" aria-label="Contact Me">
							Contact Me
						</a>
					</Link>
				</div>
			</div>
			<style jsx>
				{`
					section {
						min-height: 100vh;
						display: flex;
						align-items: center;
					}

					a.btn {
						padding: 1rem 2rem;
						border-radius: 40px;
						background: ${theme.colors.dark};
						color: ${theme.colors.light};
						transition: background 0.2s ease-in-out;
					}

					a.btn:first-child {
						margin-right: 2rem;
					}

					a.btn:hover {
						background: ${theme.colors.primary.main};
					}
				`}
			</style>
		</section>
	);
};

export default Landing;
