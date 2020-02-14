import React from "react";

import theme from "../theme/theme";

const Footer = () => {
	return (
		<footer>
			<div>
				<a href="mailto:tarun@tcwebservices.co.uk">Tarun@tcwebservices.co.uk</a>
			</div>
			<div>Tarun Cole &copy; 2020</div>
			<style jsx>
				{`
					footer {
						display: grid;
						padding: 0 20%;
						grid-template-columns: repeat(2, 1fr);
						align-items: center;
						justify-content: center;
						font-size: 0.9rem;
						color: ${theme.colors.dark};
						opacity: 0.75;
						background: ${theme.colors.background};
						overflow-x: hidden;
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
						transition: color 0.2s ease-in-out;
					}

					a:hover {
						color: ${theme.colors.primary.maint};
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
