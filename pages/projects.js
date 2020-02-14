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
					<h1>
						Some of my <span className="primary">Work</span>
					</h1>
					<div className="grid">
						{projects.map(project => (
							<div key={project.title}>
								<ProjectCard project={project} />
								<hr />
							</div>
						))}
					</div>
				</div>
			</section>
			<style jsx>
				{`
					h1 {
						margin-top: 7rem;
					}

					hr {
						padding: 1px;
						background: ${theme.colors.dark};
						border: none;
						margin: 0 auto 2rem auto;
						width: 33%;
						opacity: 0.3;
					}

					.grid div:last-of-type > hr {
						padding: 0px;
						display: none;
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
