import React from "react";
import moment from "moment";
import { months } from "../../../../static/staticNotation";
const Education = props => {
	const { education } = props;
	return (
		<div key={education.schoolName}>
			<h3>{education.schoolName}</h3>
			<div className="resume__logo" style={{backgroundImage: `url("${education.logo}")`}}/>
			<p className="info">
				{education.degree} <span>&bull;</span>
				<em className="date">
					{`${
						months[moment(education.from.toDate()).month()]
					} ${moment(education.from.toDate()).year()}`}{" "}
					-{" "}
					{`${months[moment(education.to.toDate()).month()]} ${moment(
						education.to.toDate()
					).year()} • ${education.city} `}
					
				</em>
			</p>
			<p className="resume__edu-role">{`${education.role} at ${education.lab}`}</p>
			<p>• {education.highLight}</p>
		</div>
	);
};

export default Education;
