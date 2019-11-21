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
				<section id="projects" className="page">
					<div className="container">
						<h2>My Projects</h2>
						<ProjectCard />
					</div>
				</section>
			</div>
			<style jsx>
				{`
					h2 {
						margin-top: 2rem;
						font-size: 2.5rem;
						text-decoration: underline;
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
				`}
			</style>
		</Layout>
	);
};

export default Index;
