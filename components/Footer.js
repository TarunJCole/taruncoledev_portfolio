import React from "react";

import theme from "../theme/theme";

const Footer = () => {
	return (
		<footer>
			<div>
				<a href="mailto:tarun@tcwebservices.co.uk">Tarun@tcwebservices.co.uk</a>
			</div>
			<div>TC Web Services &copy; 2020</div>
			<div>
				<span className="icon-container">
					Made with <img src="./reactjs-icon.svg" alt="React Icon" className="icon" />
					<img src="./nodejs-icon.svg" alt="Node Icon" className="icon" />
					<img src="./zeit-icon.svg" alt="Express Icon" className="icon" />
				</span>
			</div>
			<style jsx>
				{`
					footer {
						display: grid;
						padding: 0 20%;
						grid-template-columns: repeat(3, 1fr);
						align-items: center;
						justify-content: center;
						font-size: 0.9rem;
						color: ${theme.colors.light};
						background: ${theme.colors.background};
					}

					footer div {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 3rem 2rem;
					}

					a {
						color: inherit;
						text-decoration: none;
					}

					.icon-container {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					img.icon {
						margin: 0 0.25rem;
						width: 16px;
						height: 16px;
					}

					img.icon:first-child {
						margin-left: 0.75rem;
					}
				`}
			</style>
		</footer>
	);
};

export default Footer;
