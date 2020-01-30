import React, { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";

import theme from "../theme/theme";

const Layout = props => {
	const [displaySidebar, setDisplaySidebar] = useState(false);

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
					@import url("https://fonts.googleapis.com/css?family=Lalezar|Rubik&display=swap");
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
						background: ${theme.colors.background};
						scroll-behaviour: smooth;
						min-height: 100%;
						min-width: 320px;
					}
					h1,
					h2,
					h3,
					.title-font {
						font-weight: normal;
						font-family: "Lalezar", sans-serif;
					}
					h1 {
						font-size: 5rem;
					}
					h2 {
						font-size: 3.5rem;
					}

					h1,
					h2 {
						text-transform: uppercase;
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
					input,
					textarea {
						font-family: "Rubik", sans-serif;
					}
					.page {
						max-width: 100vw;
						min-height: 100vh;
						background: ${theme.colors.background};
						margin: 5% 0;
					}
					.container {
						max-width: 1200px;
						margin: 0 auto;
					}
					.disabled {
						opacity: 0 !important;
						pointer-events: none;
					}
					.primary {
						color: ${theme.colors.primary.main};
					}
				`}
			</style>
		</>
	);
};

export default Layout;
