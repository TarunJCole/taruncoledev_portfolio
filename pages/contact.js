import React from "react";

import Layout from "../components/Layout";
import theme from "../theme/theme";

const Contact = () => {
	return (
		<Layout title="Contact">
			<div className="page">
				<div className="container">
					<h1>
						Want To <span className="primary">Talk?</span>
						<br />
						Get in touch with me at
					</h1>
					<div>
						<h2>Tarun@tcwebservices.co.uk</h2>
					</div>
					<div>
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
			</div>
			<style jsx>
				{`
					* {
						text-align: center;
					}

					h1 {
						margin-top: 7rem;
					}

					ul {
						padding-left: 0;
						display: flex;
						justify-content: center;
					}

					ul img {
						height: 64px;
						margin-left: 2rem;
					}

					#twitter-icon {
						margin-left: 0;
					}

					.page {
						margin: 0 1rem;
					}

					@media only screen and (max-width: 800px) {
						h1 {
							font-size: 3.5rem;
						}

						h2 {
							font-size: 2rem;
						}
					}

					@media only screen and (max-width: 550px) {
						h1 {
							font-size: 2.5rem;
						}

						h2 {
							font-size: 1.2rem;
						}
					}
				`}
			</style>
		</Layout>
	);
};

export default Contact;
