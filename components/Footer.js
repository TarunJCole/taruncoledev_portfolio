import React from "react";

const Footer = () => {
	return (
		<footer>
			<div>a</div>
			<div>b</div>
			<div>c</div>
			<style jsx>
				{`
					footer {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						align-items: center;
						justify-content: center;
					}

					footer div {
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 3rem 2rem;
					}
				`}
			</style>
		</footer>
	);
};

export default Footer;
