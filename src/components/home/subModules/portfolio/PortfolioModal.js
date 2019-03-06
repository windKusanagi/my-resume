/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { closePortfolioModal } from "../../../../store/actions/portfolioActions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Icon from "@material-ui/core/Icon";
import ReactPlayer from "react-player";
import Stepper from "./Stepper";

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class PortfolioModal extends React.Component {
	state = {
		isMobile: false,
		windowWidth: null,
		videoIdx: 0
	};

	updateDimensions = () => {
		let windowWidth = Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		);
		if (windowWidth < 767) {
			this.setState({
				isMobile: true,
				windowWidth
			});
		} else {
			this.setState({
				isMobile: false,
				windowWidth
			});
		}
	};

	componentWillMount = () => {
		this.updateDimensions();
	};

	componentDidMount = () => {
		window.addEventListener("resize", this.updateDimensions);
	};

	onNextClicked = () => {
		let curIdx = this.state.videoIdx;
		this.setState({ videoIdx: curIdx + 1 });
	};

	onPrevClicked = () => {
		let curIdx = this.state.videoIdx;
		this.setState({ videoIdx: curIdx - 1 });
	};

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.updateDimensions);
	};

	handleClose = () => {
		this.props.closeModal();
	};

	onLinkClicked = link => {
		window.open(link, "_black");
	};

	_onReady = event => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	render() {
		const { portfolioModal } = this.props;
		let opts = {
			width: this.state.windowWidth * 0.7,
			height: (this.state.windowWidth * 0.7) / 1.77
		};
		let isMobile = false;
		if (
			portfolioModal.project &&
			portfolioModal.project.isMobile === true
		) {
			isMobile = true;
		}

		return (
			<Dialog
				open={portfolioModal.isModalOpen}
				TransitionComponent={Transition}
				keepMounted
				maxWidth={"lg"}
				onClose={this.handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle className="portfolioModal__projectSummary">
					{portfolioModal.project && portfolioModal.project.summary}
				</DialogTitle>
				<DialogContent>
					<Icon
						className="portfolioModal__closeIcon"
						onClick={this.handleClose}
					>
						clear
					</Icon>
					<DialogContentText className="portfolioModal__projectDescription">
						{portfolioModal.project &&
							portfolioModal.project.description}
						{portfolioModal.project &&
							portfolioModal.project.description &&
							portfolioModal.project.link !== "" && (
								<a
									style={{ cursor: "pointer" }}
									onClick={event => {
										event.preventDefault();
										this.onLinkClicked(
											portfolioModal.project.link
										);
									}}
								>{` Link: ${portfolioModal.project.link}`}</a>
							)}
					</DialogContentText>
					{portfolioModal.project &&
						portfolioModal.project.demoType === 1 && (
							<Carousel
								className={
									!isMobile ? "portfolio-carousel" : "portfolio-carousel_narrow"
								}
								showArrows={true}
								autoPlay={true}
								infiniteLoop={true}
							>
								{portfolioModal.project.imagesLink.map(
									(link, index) => {
										return (
											<div key={index}>
												<img src={link} alt="missing" />
											</div>
										);
									}
								)}
							</Carousel>
						)}
					{portfolioModal.project &&
						portfolioModal.project.demoType === 2 && (
							<div className="portfolioModal__video">
								<ReactPlayer
									url={
										portfolioModal.project.videoLinks[
											this.state.videoIdx
										]
									}
									controls={true}
									width={`${opts.width}px`}
									height={`${opts.height}px`}
									style={{
										alignSelf: "center",
										maxWidth: "1000px",
										maxHeight: "565px"
									}}
								/>
								<Stepper
									videoNum={
										portfolioModal.project.videoLinks.length
									}
									onNextClicked={this.onNextClicked}
									onPrevClicked={this.onPrevClicked}
								/>
							</div>
						)}
				</DialogContent>
			</Dialog>
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
		closeModal: () => dispatch(closePortfolioModal())
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PortfolioModal);
