/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Resume.scss";
import Works from "./Work";
import Education from "./Education";
import Skill from "./Skill";

class Resume extends Component {
	// isBottom(el) {
	// 	return el.getBoundingClientRect().bottom <= window.innerHeight;
	// }

	// componentDidMount() {
	// 	document.addEventListener("scroll", this.trackScrolling);
	// }

	// componentWillUnmount() {
	// 	document.removeEventListener("scroll", this.trackScrolling);
	// }

	// trackScrolling = () => {
	// 	const wrappedElement = document.getElementById("skills-sect");
	// 	if (this.isBottom(wrappedElement)) {
	// 		document.removeEventListener("scroll", this.trackScrolling);
	// 	}
	// };
	render() {
		const { works, educations, skills } = this.props;
		return (
			<section id="resume" onScroll={this.handleScroll}>
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

				<div className="row skill" id="skills-sect">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>
					<div className="nine columns main-col">
						<div className="bars">
							<ul className="skills">
								{skills &&
									skills.map(
										(skill, index) => {
											return (
												<Skill
													skill={skill}
													key={skill.id}
												/>
											);
										}
									)}
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
