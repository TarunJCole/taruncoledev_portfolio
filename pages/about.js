import React from "react";

import Layout from "../components/Layout";
import theme from "../theme/theme";

const About = () => {
	return (
		<Layout>
			<div className="page">
				<div className="container">
					<div className="about-container col-2 mt">
						<div className="about-image">
							<img src="./about-image.jpg" alt="Tarun Cole" />
						</div>
						<div className="about-text title-font">
							<p>
								Hello! My name is <span className="primary">Tarun Cole</span> and I am a web
								developer from North Wales. I specialize in{" "}
								<span className="primary">Front-End Development</span> with{" "}
								<span className="primary">React</span>.
							</p>
						</div>
					</div>
					<div className="about-skillset">
						<h2>Skillset</h2>
						<div className="about-container col-3">
							<div>
								<h3>Front End</h3>
							</div>
							<div>
								<h3>Back End</h3>
							</div>
							<div>
								<h3>Various</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					p:first-child {
						margin-top: 0;
					}

					h3 {
						font-size: 2rem;
						border-bottom: 2px solid ${theme.colors.dark};
					}

					.about-container {
						margin-top: 2rem;
						height: 450px;
						display: grid;
						grid-gap: 3rem;
					}

					.mt {
						margin-top: 10rem;
					}

					.col-2 {
						grid-template-columns: repeat(2, 1fr);
					}

					.col-3 {
						grid-template-columns: repeat(3, 1fr);
					}

					.about-image {
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.about-image img {
						height: 450px;
						width: 600px;
					}

					.about-text {
						font-size: 2rem;
					}

					.about-skillset {
						margin-top: 5rem;
					}
				`}
			</style>
		</Layout>
	);
};

export default About;
