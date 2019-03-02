import React from "react";


const Skill = props => {
	const { skill } = props;
	// console.log(skill.level);
	var className = "bar-expand ";
	let color;
	let label;
	if (skill.level >= 0.7){
		color = "#b2ff59"
		label = "Excellent"
	}else if (skill.level >= 0.5){
		color = "#f4ff81"
		label = "Good"
	}else if (skill.level >= 0.3){
		color = "#ffcc80"
		label = "Beginner"
	}else {
		color="black"
		label = "Beginner"
	}
	var spanStyle = {
		background: color,
		width: `${skill.level*100}%`,
		textAlign: "center",
		lineHeight: "30px",
		fontWeight: "700"
	  };

	return (
		<li key={skill.name}>
			<span style={spanStyle} className={className}> {label} </span>
			<em>{skill.name}</em>
		</li>
	);
};

export default Skill;
