/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./Header.scss";

class Header extends Component {
	
	onSoicalLinkClicked = url => {
		window.open(url, "_blank");
	};

	render() {
		const { myInfo, socialMedia } = this.props;
		if (socialMedia) {
			var networks = socialMedia.map(network => {
				return (
					<li key={network.name}>
						<a
							onClick={event => {
								event.preventDefault();
								this.onSoicalLinkClicked(network.url);
							}}
							style={{cursor: "pointer"}}
						>
							<i className={network.className} />
						</a>
					</li>
				);
			});
		}
		return (
			<header id="home">
				<nav id="nav-wrap">
					<a
						className="mobile-btn"
						href="#nav-wrap"
						title="Show navigation"
					>
						Show navigation
					</a>
					<a
						className="mobile-btn"
						href="#home"
						title="Hide navigation"
					>
						Hide navigation
					</a>

					<ul id="nav" className="nav">
						<li className="current">
							<a className="smoothscroll" href="#home">
								Home
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#resume">
								Resume
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#portfolio">
								Works
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#testimonials">
								Testimonials
							</a>
						</li>
					</ul>
				</nav>

				<div className="row banner">
					{myInfo && (
						<div className="banner-text">
							<h1 className="responsive-headline">
								I'm {myInfo.name}.
							</h1>
							<h2 className="header__description">
								{`${myInfo.occupation} `}
								{`in ${myInfo.company}`}
							</h2>
							<hr />
							<ul className="social header__social ">
								{networks}
							</ul>
						</div>
					)}
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about">
						<i className="icon-down-circle" />
					</a>
				</p>
			</header>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state);
	return {
		myInfo: state.firestore.ordered.personalInfo
			? state.firestore.ordered.personalInfo[0]
			: null,
		socialMedia: state.firestore.ordered.socialMediaLink
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "personalInfo" },
		{ collection: "socialMediaLink" }
	])
)(Header);
