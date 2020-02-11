import React from "react";

import Layout from "../components/Layout";
import theme from "../theme/theme";

const About = () => {
	return (
		<Layout title="About">
			<div className="page">
				<div className="container">
					<div className="about-container col-2 mt">
						<div className="about-image">
							<img src="./about-image-gray.jpg" alt="Tarun Cole" />
						</div>
						<div className="about-text">
							<p>
								<p className="about-text-title title-font">
									Hello! My name is <span className="primary">Tarun Cole</span> and I am a web
									developer from North Wales. I specialize in{" "}
									<span className="primary">Front-End Development</span> with{" "}
									<span className="primary">React</span>.
								</p>
								<p className="about-text-body">
									<p>
										I have been enthused and passionate about computing since I was around five
										years old, when my uncle gave me his old windows 95 machine for my birthday.
										Hours were spent tinkering with software and games alike!
									</p>
									<p>
										Later in life, I ended up going to university to study chemistry. After
										completing my degree, I realised that I wanted my career to take a different
										direction.
									</p>
									<p>
										Re-Igniting my passion for computing, I started learning programming. Eventually
										I found Javascript and settled on web development.
									</p>
									<p>
										Deciding I wanted to make this my career, I have been learning web development
										ever since, and I hope to continue improving for years to come!
									</p>
								</p>
							</p>
						</div>
					</div>
					<div className="about-skillset">
						<h2>Skillset</h2>
						<div className="skill-container col-3">
							<div>
								<h3>Front End</h3>
								<ul>
									<li>HTML5</li>
									<li>CSS3 + SASS</li>
									<li>Javascript</li>
									<li>React</li>
									<li>Responsive Design</li>
									<li>CSS in JS</li>
								</ul>
							</div>
							<div>
								<h3>Back End</h3>
								<ul>
									<li>Node JS</li>
									<li>Express</li>
									<li>MongoDB</li>
									<li>Next JS</li>
								</ul>
							</div>
							<div>
								<h3>Various</h3>
								<ul>
									<li>Git / Github</li>
									<li>Command Line / CLI</li>
									<li>Chrome Devtools</li>
									<li>SEO</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					h3 {
						font-size: 2rem;
						border-bottom: 2px solid ${theme.colors.dark};
					}

					ul {
						padding-left: 0;
					}

					p:first-child {
						margin-top: 0;
					}

					.about-container {
						margin-top: 2rem;
						height: 450px;
						display: grid;
						grid-gap: 3rem;
					}

					.skill-container {
						margin-top: 2rem;
						height: 300px;
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
						border-radius: 5px;
					}

					.about-text {
						font-size: 1rem;
					}

					.about-text-title {
						font-size: 1.25rem;
					}

					.about-text-body {
						opacity: 0.8;
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
