/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import { months } from "../../../../static/staticNotation";

class Resume extends Component {
	render() {
		const { works } = this.props;
		
		if (works) {
			var work = works.map(work => {
				return (
					<div key={work.id}>
						<h3>{work.companyName}</h3>
						<a 
							style={{cursor: "pointer"}}
							onClick={(event) => {
							event.preventDefault();
							window.open(work.website, "_blank");
						}}>{work.website}</a>
						<p className="info">
							{work.title}
							<span>&bull;</span>{" "}
							<em className="date">
								{`${
									months[moment(work.from.toDate()).month()]
								} ${moment(work.from.toDate()).year()}`}{" "}
								- {work.to? `${
									months[moment(work.to.toDate()).month()]
								} ${moment(work.to.toDate()).year()}` : "Present"}
							</em>
						</p>
						<p>{work.summary}</p>
					</div>
				);
			});

			var education = this.props.data.education.map(education => {
				return (
					<div key={education.school}>
						<h3>{education.school}</h3>
						<p className="info">
							{education.degree} <span>&bull;</span>
							<em className="date">{education.graduated}</em>
						</p>
						<p>{education.description}</p>
					</div>
				);
			});
			var skills = this.props.data.skills.map(skills => {
				var className = "bar-expand " + skills.name.toLowerCase();
				return (
					<li key={skills.name}>
						<span
							style={{ width: skills.level }}
							className={className}
						/>
						<em>{skills.name}</em>
					</li>
				);
			});
		}

		return (
			<section id="resume">
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span style={{ lineHeight: "35px" }}>
								Work Experience
							</span>
						</h1>
					</div>

					<div className="nine columns main-col">{work}</div>
				</div>

				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">{education}</div>
						</div>
					</div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div className="bars">
							<ul className="skills">{skills}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		works: state.firestore.ordered.workExperience
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "workExperience", orderBy: ["from", "desc"] }
	])
)(Resume);
