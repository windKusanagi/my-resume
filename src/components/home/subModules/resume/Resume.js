/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./Resume.scss";
import Works from "./Work";
import Education from "./Education";

class Resume extends Component {
	render() {
		const { works, educations } = this.props;
		if (educations) {
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

					<div className="nine columns main-col">
						{works &&
							works.map((work, index) => {
								return <Works key={work.id} work={work} />;
							})}
					</div>
				</div>

				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">
								{educations &&
									educations.map(education => {
										return (
											<Education
												key={education.id}
												education={education}
											/>
										);
									})}
							</div>
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
		works: state.firestore.ordered.workExperience,
		educations: state.firestore.ordered.education
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "workExperience", orderBy: ["from", "desc"] },
		{ collection: "education", orderBy: ["from", "desc"] }
	])
)(Resume);
