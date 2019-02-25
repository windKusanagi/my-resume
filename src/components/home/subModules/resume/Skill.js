import React from "react";


const Skill = props => {
	const { skill } = props;
	var className = "bar-expand ";
	return (
		<li key={skill.name}>
			<span style={{ width: `${skill.level*100}%` }} className={className} />
			<em>{skill.name}</em>
			
		</li>
	);
};

export default Skill;
