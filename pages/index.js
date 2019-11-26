import React from "react";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import ProjectCard from "../components/ProjectCard";

import theme from "../theme/theme";
import projects from "../res/projectInfo";

const Index = () => {
	return (
		<Layout title="Home">
			<Landing />
			<div>
				<section id="about" className="page">
					<h2>About Section</h2>
				</section>
				<section id="projects" className="page">
					<div className="container">
						<h2>My Projects</h2>
						{projects.map(project => (
							<ProjectCard project={project} />
						))}
					</div>
				</section>
				<section id="contact" className="page">
					<div className="container">
						<h2>Contact Me</h2>
						<form action="" id="contact-form">
							<input
								className="form-field"
								type="text"
								name="name"
								placeholder="What is your name?"
							/>
							<input
								className="form-field"
								type="email"
								name="email"
								placeholder="What is your email address?"
							/>
							<textarea
								className="form-field"
								name="message"
								cols="30"
								rows="10"
								placeholder="What would you like to talk about?"
							></textarea>
							<input className="submit-btn" type="submit" value="Send" />
						</form>
					</div>
				</section>
			</div>
			<style jsx>
				{`
					h2 {
						margin: 4rem 0;
						font-size: 2.5rem;
						text-align: center;
					}

					.page {
						width: 100vw;
						min-height: 100vh;
						background: ${theme.colors.light};
						border: 1px solid rebeccapurple;
					}

					#projects .container {
						display: grid;
						grid-template-columns: 1fr;
					}

					#contact .container {
						display: flex;
						flex-direction: column;
						height: 100%;
					}

					#contact-form {
						align-self: center;
						display: flex;
						flex-direction: column;
						margin-top: auto;
					}

					#contact-form .form-field {
						min-width: 800px;
						margin: 1.5rem 0;
						padding-bottom: 0.5rem;
						font-size: 1.2rem;
						border: none;
						border-bottom: 3px solid ${theme.colors.primary.dark};
						background: inherit;
						outline: none;
					}

					 {
						/* #contact-form .form-field:focus {
						background: white;
					} */
					}

					#contact-form .submit-btn {
						padding: 2rem;
						max-width: 33%;
						margin-top: 1rem;
						font-size: 1.2rem;
						background: ${theme.colors.secondary.light};
						border: none;
						cursor: pointer;
						transition: background 0.2s ease-in-out;
					}

					#contact-form .submit-btn:hover {
						background: ${theme.colors.secondary.main};
					}
				`}
			</style>
		</Layout>
	);
};

export default Index;
