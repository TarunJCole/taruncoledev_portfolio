import React from "react";

import Layout from "../components/Layout";
import theme from "../theme/theme";

const Contact = () => {
	return (
		<Layout title="Contact">
			<div className="page">
				<div className="container">
					<h1>Want To Talk?</h1>
				</div>
			</div>
			<style jsx>
				{`
					h1 {
						margin-top: 7rem;
					}
				`}
			</style>
		</Layout>
	);
};

export default Contact;
