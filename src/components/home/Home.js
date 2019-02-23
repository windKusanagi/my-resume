import React, { Component } from "react";
import Header from "./subModules/header/Header";
import Footer from "./subModules/Footer";
import About from "./subModules/about/About";
import Resume from "./subModules/resume/Resume";
import Testimonials from "./subModules/Testimonials";
import Portfolio from "./subModules/Portfolio";
import $ from "jquery";

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
		const { main, resume, portfolio, testimonials } = this.state.resumeData;
		return (
			<div>
				<Header data={main} />
				<About data={main} />
				<Resume data={resume} />
				<Portfolio data={portfolio} />
				<Testimonials data={testimonials} />
				<Footer data={main} />
			</div>
		);
	}
}

export default Home;
