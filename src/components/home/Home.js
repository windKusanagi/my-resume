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
		const { portfolio } = this.state.resumeData;
		const {
			myInfo,
			socialMedia,
			works,
			educations,
			skills,
			references,
			portfolios
		} = this.props;
		let allReady = (
				myInfo &&
				socialMedia &&
				works &&
				educations &&
				skills &&
				references &&
				portfolios
			)
		return (
			<div>
				{!allReady && <LoadingScreen />}
				<Header myInfo={myInfo} socialMedia={socialMedia} />
				<About myInfo={myInfo} />
				<Resume works={works} educations={educations} skills={skills} />
				<Portfolio data={portfolio} portfolios={portfolios} />
				<Testimonials references={references} />
				<Footer socialMedia={socialMedia} />
			</div>
		);

	}
}

const mapStateToProps = state => {
	const references = state.firestore.ordered.reference;
	const allPortfolios = state.firestore.ordered.portfolios;
	return {
		myInfo: state.firestore.ordered.personalInfo
			? state.firestore.ordered.personalInfo[0]
			: null,
		socialMedia: state.firestore.ordered.socialMediaLink,
		works: state.firestore.ordered.workExperience,
		educations: state.firestore.ordered.education,
		skills: state.firestore.ordered.skills,
		references: references
			? references.filter(el => el.comment !== "")
			: null,
		portfolios: allPortfolios
			? allPortfolios.filter(el => el.isReady === true)
			: null
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "personalInfo" },
		{ collection: "workExperience", orderBy: ["from", "desc"] },
		{ collection: "education", orderBy: ["from", "desc"] },
		{ collection: "skills", orderBy: ["level", "desc"] },
		{ collection: "socialMediaLink" },
		{ collection: "portfolios" },
		{ collection: "reference" }
	])
)(Home);
