import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Testimonials extends Component {
	render() {
		const { references } = this.props;
		if (references) {
			var testimonials = references.map(el => {
				return (
					<li key={el.id}>
						<blockquote>
							<p>{el.comment}</p>
							<cite>{el.refererName} - {el.title}</cite>
						</blockquote>
					</li>
				);
			});
		}

		return (
			<section id="testimonials">
				<div className="text-container">
					<div className="row">
						<div className="two columns header-col">
							<h1>
								<span>Client Testimonials</span>
							</h1>
						</div>

						<div className="ten columns flex-container">
							<ul className="slides">{testimonials}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	const references = state.firestore.ordered.reference;
	return {
		references: references
			? references.filter(el => el.comment !== "")
			: null
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: "reference" }])
)(Testimonials);
