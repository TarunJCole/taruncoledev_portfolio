import React from "react";

import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";

import theme from "../theme/theme";
import projects from "../res/projectInfo";

const Projects = () => {
	return (
		<Layout title="Projects">
			<section id="projects" className="page">
				<div className="container">
					<h1>Things I've Made</h1>
					<div className="grid">
						{projects.map(project => (
							<ProjectCard project={project} key={project.title} />
						))}
					</div>
				</div>
			</section>
			<style jsx>
				{`
					h1 {
						margin-top: 7rem;
					}

					#projects .grid {
						display: grid;
						grid-template-columns: 1fr;
					}
				`}
			</style>
		</Layout>
	);
};

export default Projects;
