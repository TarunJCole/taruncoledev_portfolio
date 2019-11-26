import React from "react";

import theme from "../theme/theme";

const Footer = () => {
	return (
		<footer>
			<div>
				<a href="mailto:tarun@tcwebservices.co.uk">tarun@tcwebservices.co.uk</a>
			</div>
			<div>&copy; tcwebservices 2019-2020</div>
			<div></div>
			<style jsx>
				{`
					footer {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						align-items: center;
						justify-content: center;
						font-weight: bold;
						color: ${theme.colors.primary.dark};
					}

					footer div {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 3rem 2rem;
					}
				`}
			</style>
		</footer>
	);
};

export default Footer;
