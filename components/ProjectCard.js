import React from "react";
import { IconContext } from "react-icons/lib";
import { MdComputer } from "react-icons/md";
import { FaCode } from "react-icons/fa";

import theme from "../theme/theme";

const ProjectCard = props => {
	return (
		<div className="card">
			<div className="card-img">img</div>
			<div className="card-text">
				<h3>{props.title}</h3>
				<div>{props.desc}</div>
				<div className="right">
					<a href={props.liveUrl} className="liveBtn">
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
					<a href={props.codeUrl} className="codeBtn">
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
						box-shadow: 10px 10px 10px -6px rgba(150, 150, 150, 0.67);
						background: #fdfdfd;
					}

					.card-img {
						width: 320px;
						height: 180px;
						border-right: 3px solid ${theme.colors.primary.main};
					}

					.card-text {
						display: flex;
						flex-direction: column;
						padding: 1rem 2rem;
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

					.liveBtn {
						background: ${theme.colors.primary.main};
					}

					.codeBtn {
						background: ${theme.colors.secondary.main};
					}

					.liveBtn:hover {
						background: ${theme.colors.primary.dark};
					}

					.codeBtn:hover {
						background: ${theme.colors.secondary.dark};
					}

					a:first-child {
						margin-right: 2rem;
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
