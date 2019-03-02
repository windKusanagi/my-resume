/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import moment from "moment";
import { months } from "../../../../static/staticNotation";
import "./Resume.scss";

const Work = props => {
	const { work } = props;

	return (
		<div key={work.id}>
			<h3>{work.companyName}</h3>
			<div
				className="resume__logo"
				style={{ backgroundImage: `url("${work.logo}")` }}
			/>
			<div className="resume__companyLink-container">
				<a
					style={{ cursor: "pointer" }}
					onClick={event => {
						event.preventDefault();
						window.open(work.website, "_blank");
					}}
				>
					{work.website}
				</a>
			</div>
			<p className="info">
				{work.title}
				<span>&bull;</span>{" "}
				<em className="date">
					{`${months[moment(work.from.toDate()).month()]} ${moment(
						work.from.toDate()
					).year()}`}{" "}
					-{" "}
					{work.to
						? `${months[moment(work.to.toDate()).month()]} ${moment(
								work.to.toDate()
						  ).year()}`
						: "Present"}
				</em>
			</p>
			<p className="resume__workSummary">{work.summary}</p>
			<p className="resume__accomplishment-title">Accomplishments:</p>
			{work.accomplishments.map((acc, index) => {
				return (
					<div className="resume__accomplishment" key={index}>
						<div className="resume__accomplishment__bullet">
							&bull;
						</div>
						<em className="date resume__accomplishment__content">
							{acc}
						</em>
					</div>
				);
			})}
			<br />
		</div>
	);
};

export default Work;
