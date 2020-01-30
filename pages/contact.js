import React from "react";

import Layout from "../components/Layout";
import theme from "../theme/theme";

const Contact = () => {
	return (
		<Layout>
			<div className="page">
				<div className="container">
					<h1>Want To Talk?</h1>
				</div>
			</div>
			<style jsx>
				{`
					h1 {
						margin-top: 9rem;
					}
				`}
			</style>
		</Layout>
	);
};

export default Contact;
