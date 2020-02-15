import React, { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import theme from "../theme/theme";

const Layout = props => {
	const [displaySidebar, setDisplaySidebar] = useState(false);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
				<title>{`${props.title} | TC Web Services`}</title>
				<meta
					name="description"
					content="Hello! My name is Tarun Cole and I am a web developer from North Wales. I specialize in Front-End Development with React."
				/>
				<meta
					name="keywords"
					content="Web,Website,React,Front-End,Developer,Javascript,Design,Tarun,Cole,Nodejs"
				/>
			</Head>
			<Navbar setDisplaySidebar={setDisplaySidebar} displaySidebar={displaySidebar} />
			<Sidebar displaySidebar={displaySidebar} />
			{props.children}
			<Footer />
			<style jsx global>
				{`
					@import url("https://fonts.googleapis.com/css?family=Black+Han+Sans|Rubik|Josefin+Slab&display=swap");
					html {
						box-sizing: border-box;
						overflow-y: scroll;
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
						font-family: "Black Han Sans", sans-serif;
					}
					h1 {
						font-size: 4.5rem;
					}
					h2 {
						font-size: 3rem;
						margin-bottom: 1.5rem;
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
						min-height: 80vh;
						background: ${theme.colors.background};
						margin: 5% 0;
					}
					.container {
						max-width: 1150px;
						margin: 0 auto;
					}
					.disabled {
						opacity: 0 !important;
						pointer-events: none;
					}
					.primary {
						color: ${theme.colors.primary.main};
					}
					.light {
						background-color: ${theme.colors.light};
					}

					@media only screen and (max-width: 700px) {
						h1 {
							font-size: 3.5rem;
						}
						h2 {
							font-size: 2.5rem;
							margin-bottom: 1.5rem;
						}
					}
				`}
			</style>
		</>
	);
};

export default Layout;
