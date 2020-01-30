import React from "react";

import Layout from "../components/Layout";
import Landing from "../components/Landing";

import theme from "../theme/theme";

const Index = () => {
	return (
		<Layout title="Home">
			<Landing />
			<div className="container">
				<div>
					<h2>
						Things I Can Do For <span className="primary">You</span>
					</h2>
				</div>
			</div>

			<style jsx>
				{`
					h1 {
						margin: 4rem 0 6rem 0;
						font-size: 5rem;
					}
				`}
			</style>
		</Layout>
	);
};

export default Index;
