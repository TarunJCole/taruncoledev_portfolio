import React from "react";
import { IconContext } from "react-icons/lib";
import { MdComputer } from "react-icons/md";
import { FaCode } from "react-icons/fa";

import theme from "../theme/theme";

const ProjectCard = props => {
	return (
		<div className="card">
			<div className="card-img"></div>
			<div className="card-text">
				<h3>{props.project.title}</h3>
				<div>{props.project.description}</div>
				<div className="right">
					<a href={props.project.liveUrl} className="cardBtn">
						<IconContext.Provider
							value={{
								style: { verticalAlign: "middle", fontSize: "1.5rem", margin: "0 3px 3px 0" }
							}}
						>
							<span>
								<MdComputer className="icon" />
							</span>
						</IconContext.Provider>{" "}
						Live
					</a>
					<a href={props.project.codeUrl} className="cardBtn">
						<IconContext.Provider
							value={{
								style: { verticalAlign: "middle", fontSize: "1.5rem", margin: "0 3px 3px 0" }
							}}
						>
							<span>
								<FaCode className="icon" />
							</span>
						</IconContext.Provider>{" "}
						Code
					</a>
				</div>
			</div>
			<style jsx>
				{`
					.card {
						display: grid;
						grid-template-columns: auto 1fr;
						background: none;
						margin-bottom: 2rem;
					}

					.card-img {
						width: 320px;
						height: 180px;
						background: url(${props.project.image}) no-repeat center center/cover;
					}

					.card-text {
						display: flex;
						flex-direction: column;
						padding: 0 2rem;
					}

					.card-text h3 {
						font-size: 1.5rem;
						margin-bottom: 1rem;
					}

					.right {
						margin-top: 2rem;
						align-self: flex-end;
						justify-self: flex-end;
					}

					a {
						padding: 1rem 2rem;
						border-radius: 40px;
						background: ${theme.colors.dark};
						color: ${theme.colors.light};
						transition: background 0.2s ease-in-out;
					}

					a:hover {
						background: ${theme.colors.primary.main};
					}

					a:first-child {
						margin-right: 2rem;
					}

					@media only screen and (max-width: 700px) {
						.card {
							grid-template-columns: 1fr;
							text-align: center;
						}

						.card-img {
							margin: 0 auto;
							width: 80%;
						}

						.card-text {
							padding: 1rem 2rem;
						}

						.right {
							align-self: center;
							justify-self: center;
						}
					}

					@media only screen and (max-width: 400px) {
						.right {
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
						}

						a {
							margin-bottom: 1rem;
							width: 100%;
						}

						a:first-child {
							margin-right: 0;
						}
					}
				`}
			</style>
		</div>
	);
};

ProjectCard.defaultProps = {
	title: "Title",
	desc: "Description Here",
	liveUrl: "/",
	codeUrl: "/",
	imgHref: "/"
};

export default ProjectCard;
