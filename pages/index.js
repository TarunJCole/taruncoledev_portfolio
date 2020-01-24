import React from "react";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

import theme from "../theme/theme";
import projects from "../res/projectInfo";

const Index = () => {
	return (
		<Layout title="Home">
			<Landing />
			<div>
				<section id="projects" className="page">
					<div className="container">
						<h2>PROJECTS</h2>
						{projects.map(project => (
							<ProjectCard project={project} key={project.title} />
						))}
					</div>
				</section>
				<ContactForm />
			</div>
			<style jsx>
				{`
					h2 {
						margin: 4rem 0 6rem 0;
						font-size: 5rem;
					}

					.page {
						max-width: 100vw;
						min-height: 100vh;
						background: ${theme.colors.background};
						margin: 5% 0;
					}

					#projects .container {
						display: grid;
						grid-template-columns: 1fr;
					}
				`}
			</style>
		</Layout>
	);
};

export default Index;
