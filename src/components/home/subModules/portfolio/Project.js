/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Project = props => {
	const { project } = props;
	return (
		<div
			className="columns portfolio-item"
			onClick={props.openModal}
		>
			<div className="item-wrap">
				<div title={project.summary}>
					<img alt={project.projectName} src={project.coverImgUrl} />
					<div className="overlay">
						<div className="portfolio-item-meta">
							<h5>{project.projectName}</h5>
							<p>{project.label?`${project.label} `:''}{project.summary}</p>
						</div>
					</div>
					<div className="link-icon">
						<i className="fa fa-link" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project
