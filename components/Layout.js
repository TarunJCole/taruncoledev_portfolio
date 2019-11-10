import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = props => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
			<style jsx global>
				{`
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
					}
				`}
			</style>
		</>
	);
};

export default Layout;
