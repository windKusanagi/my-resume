/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class About extends Component {
	downloadResume = uri => {
		window.open(uri, "_blank");
	};

	render() {
		const { myInfo } = this.props;
		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img
							className="profile-pic"
							src={"images/me.jpg"}
							alt="Xiang Zhang Pic"
						/>
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>
						<p className="forceFontColor-grey">
							{myInfo ? myInfo.summary : "loading ..."}
						</p>
						<div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								{myInfo ? (
									<p className="address forceFontColor-grey">
										<span>{myInfo.name}</span>
										<br />
										<span>
											{myInfo.address}
											<br />
											{myInfo.city}, {myInfo.postCode}
										</span>
										<br />
										<span>{myInfo.phone}</span>
										<br />
										<span>{myInfo.email}</span>
									</p>
								) : (
									<p className="address">
										<span> "loading ... "</span>
									</p>
								)}
							</div>
							<div className="columns download">
								<p>
									<a
										className="button"
										onClick={event => {
											event.preventDefault();
											this.downloadResume(
												myInfo.resumeUrl,
												"resume"
											);
										}}
									>
										<i className="fa fa-download" />
										Download Resume
									</a>
								</p>
								<p>
									Find the source code of this React SPA at:{" "}
									<a
										onClick={event => {
											event.preventDefault();
											window.open(
												"https://github.com/windKusanagi/my-resume",
												"_blank"
											);
										}}
										style={{cursor: "pointer"}}
									>
										https://github.com/windKusanagi/my-resume
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
