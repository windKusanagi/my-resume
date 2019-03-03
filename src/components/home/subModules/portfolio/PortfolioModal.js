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

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class PortfolioModal extends React.Component {
	handleClose = () => {
		this.props.closeModal();
	};

	render() {
		const { portfolioModal } = this.props;
		return (
			<div>
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

							{portfolioModal.project &&
								portfolioModal.project.summary}

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

						</DialogContentText>
						{portfolioModal.project && (
							<Carousel
								className="carousel"
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
					</DialogContent>
				</Dialog>
			</div>
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
