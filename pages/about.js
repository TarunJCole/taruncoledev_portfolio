import React from "react";

import Layout from "../components/Layout";
import theme from "../theme/theme";

const About = () => {
	return (
		<Layout>
			<div className="page">
				<div className="about-container">
					<div className="about-image">
						<img src="./about-image.jpg" alt="Tarun Cole" />
					</div>
					<div className="about-text title-font">text</div>
				</div>
			</div>
			<style jsx>
				{`
					.about-container {
						height: 90vh;
						display: grid;
						grid-template-columns: 1fr 1fr;
					}

					.about-image,
					.about-text {
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.about-image img {
						height: 600px;
					}

					.about-text {
						font-size: 2rem;
					}
				`}
			</style>
		</Layout>
	);
};

export default About;
