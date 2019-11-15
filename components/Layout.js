import React, { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";

import theme from "../theme/theme";

const Layout = props => {
	const [displaySidebar, setDisplaySidebar] = useState(false);

	useEffect(() => {
		console.log(displaySidebar);
	});

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
				<title>{`${props.title} | TC Web Services`}</title>
			</Head>
			<Navbar toggleSidebar={setDisplaySidebar} displaySidebar={displaySidebar} />
			<Sidebar displaySidebar={displaySidebar} />
			<Overlay displaySidebar={displaySidebar} />
			{props.children}
			<Footer />
			<style jsx global>
				{`
					@import url("https://fonts.googleapis.com/css?family=Crete+Round|Rubik&display=swap");
					html {
						box-sizing: border-box;
					}
					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}
					body {
						font-family: "Rubik", sans-serif;
						margin: 0;
						padding: 0;
						font-size: 16px;
						font-weight: 400;
						line-height: 1.6;
						color: ${theme.colors.dark};
						scroll-behaviour: smooth;
						min-height: 100%;
						min-width: 320px;
					}
					h1,
					h2,
					h3 {
						font-family: "Crete Round", serif;
					}
					a {
						text-decoration: none;
						color: inherit;
						cursor: pointer;
					}
					button {
						cursor: pointer;
					}
					ul {
						list-style: none;
					}
					.disabled {
						opacity: 0 !important;
						pointer-events: none;
					}
				`}
			</style>
		</>
	);
};

export default Layout;
