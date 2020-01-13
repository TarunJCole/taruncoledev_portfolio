import React from "react";
import { Link as ScrollLink } from "react-scroll";

import theme from "../theme/theme";

const Landing = () => {
	return (
		<section>
			<div className="title-area">
				<h1>
					Tarun Cole
					<br />
					Web Developer
				</h1>
				<div className="title-links">
					<ScrollLink to="projects" smooth={true}>
						<span className="btn">See Projects</span>
					</ScrollLink>
					<ScrollLink to="contact" smooth={true}>
						<span className="btn">Contact Me</span>
					</ScrollLink>
				</div>
			</div>
			<style jsx>
				{`
					section {
						min-height: 100vh;
						display: flex;
						align-items: center;
					}

					.title-area {
						margin-left: 15%;
					}

					.title-area h1 {
						font-size: 4rem;
					}

					span.btn {
						padding: 1rem 2rem;
						border-radius: 40px;
						background: ${theme.colors.light};
						color: ${theme.colors.dark};
						transition: background 0.2s ease-in-out;
					}

					span.btn:first-child {
						margin-right: 2rem;
					}

					span.btn:hover {
						background: ${theme.colors.primary.light};
					}
				`}
			</style>
		</section>
	);
};

export default Landing;
