import React from "react";
import { IconContext } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";

import theme from "../theme/theme";

const Footer = () => {
	return (
		<footer>
			<div>
				<a href="mailto:tarun@tcwebservices.co.uk">tarun@tcwebservices.co.uk</a>
			</div>
			<div>&copy; tcwebservices 2019-2020</div>
			<div>
				<span>
					Made with
					<img src="./reactjs-icon.svg" alt="React Icon" className="icon" />
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
						color: ${theme.colors.primary.dark};
					}

					footer div {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 3rem 2rem;
					}

					img.icon {
						width: 24px;
						height: 24px;
					}
				`}
			</style>
		</footer>
	);
};

export default Footer;
