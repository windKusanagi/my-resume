import React, { Component } from "react";
import { connect } from "react-redux";
import { openPortfolioModal } from "../../../../store/actions/portfolioActions";
import Project from "./Project";
import PortfolioModal from "./PortfolioModal";
import "./Portfolio.scss";

class Portfolio extends Component {
	openPortfolioModal = project => {
		this.props.openModal(project);
	};
	render() {
		const { portfolios, portfolioModal } = this.props;
		return (
			<section id="portfolio">
				{portfolioModal.isModalOpen && <PortfolioModal/>}
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Check Out Some of My Works.</h1>
						<div
							id="portfolio-wrapper"
							className="bgrid-quarters s-bgrid-thirds cf"
						>
							{portfolios && portfolios.map((project) => {
								return (
									<Project
										key={project.id}
										project={project}
										openModal={() => {this.openPortfolioModal(project)}}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		portfolioModal: state.portfolioModal
	};
};

const mapDispatchToProps = dispatch => {
	return {
		openModal: project => {
			dispatch(openPortfolioModal(project));
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Portfolio);
