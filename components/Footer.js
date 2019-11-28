import React from "react";

import theme from "../theme/theme";

const Footer = () => {
	return (
		<footer>
			<div>
				<a href="mailto:tarun@tcwebservices.co.uk">tarun@tcwebservices.co.uk</a>
			</div>
			<div>&copy; tcwebservices 2019-2020</div>
			<div>
				<span className="icon-container">
					Made with: <img src="./reactjs-icon.svg" alt="React Icon" className="icon" />
					<img src="./nodejs-icon.svg" alt="Node Icon" className="icon" />
					<img src="./expressjs-icon.svg" alt="Express Icon" className="icon" />
				</span>
			</div>
			<style jsx>
				{`
					footer {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						align-items: center;
						justify-content: center;
						font-weight: bold;
						color: ${theme.colors.dark};
						background: ${theme.colors.secondary.main};
					}

					footer div {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 3rem 2rem;
					}

					.icon-container {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					img.icon {
						margin: 0 0.25rem;
						width: 24px;
						height: 24px;
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
