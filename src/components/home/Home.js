import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Header from "./subModules/header/Header";
import Footer from "./subModules/footer/Footer";
import About from "./subModules/about/About";
import Resume from "./subModules/resume/Resume";
import Testimonials from "./subModules/comments/Testimonials";
import Portfolio from "./subModules/portfolio/Portfolio";
import $ from "jquery";
import LoadingScreen from "../widgets/loadingScreen/LoadingScreen";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foo: "bar",
			resumeData: {}
		};
		// ReactGA.initialize('UA-110570651-1');
		// ReactGA.pageview(window.location.pathname);
	}

	getResumeData() {
		$.ajax({
			url: "/resumeData.json",
			dataType: "json",
			cache: false,
			success: function(data) {
				this.setState({ resumeData: data });
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
				alert(err);
			}
		});
	}

	componentDidMount = () => {
		this.getResumeData();
	};

	render() {
		const { portfolio, testimonials } = this.state.resumeData;
		const { myInfo } = this.props;
		return (
			<div>
				{!myInfo&& (<LoadingScreen/>)}
				<Header/>
				<About/>
				<Resume/>
				<Portfolio data={portfolio} />
				<Testimonials data={testimonials} />
				<Footer/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		myInfo: state.firestore.ordered.personalInfo
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "personalInfo" }
	])
)(Home);
