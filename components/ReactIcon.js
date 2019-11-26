import React from "react";
import { IconContext } from "react-icons";

const ReactIcon = props => {
	return (
		<IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
			<span>{props.icon}</span>
		</IconContext.Provider>
	);
};

ReactIcon.defaultProps = {
	icon: "FaDev"
};

export default ReactIcon;
