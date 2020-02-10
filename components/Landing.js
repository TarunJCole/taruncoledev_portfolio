import React from "react";
import Link from "next/link";

import theme from "../theme/theme";

const Landing = () => {
	return (
		<section className="container">
			<div className="title-area">
				<h1>
					<span className="primary">Tarun Cole</span>
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
					<ul>
						<li>
							<a href="https://twitter.com/" aria-label="Twitter">
								<img src="./twitter-official.svg" alt="Twitter Icon" id="twitter-icon" />
							</a>
						</li>
						<li>
							<a href="https://github.com/TarunJCole?tab=repositories" aria-label="Github">
								<img src="./github-tile.svg" alt="Github Icon" id="github-icon" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<style jsx>
				{`
					section {
						min-height: 100vh;
						display: flex;
						align-items: center;
					}

					h1 {
						margin: 2rem 0;
					}

					div.title-area {
						margin-bottom: 4rem;
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

					ul {
						padding: 1rem 0;
						display: flex;
					}

					ul img {
						height: 40px;
						margin-left: 1rem;
						opacity: 0.4;
						transition: opacity 0.3s ease;
					}

					ul img:hover {
						opacity: 1;
					}

					#twitter-icon {
						margin-left: 0;
					}
				`}
			</style>
		</section>
	);
};

export default Landing;
