/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Footer extends Component {
	onSoicalLinkClicked = url => {
		window.open(url, "_blank");
	};
	render() {
		const { socialMedia } = this.props;
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
			<footer>
				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">{networks}</ul>
						<ul className="copyright">
							<li>&copy; Copyright 2019 Xiang Zhang</li>
							<li>
								Design by{" "}
								<a
									title="Styleshout"
									href="http://www.styleshout.com/"
								>
									Styleshout
								</a>
							</li>
						</ul>
					</div>
					<div id="go-top">
						<a
							className="smoothscroll"
							title="Back to Top"
							href="#home"
						>
							<i className="icon-up-open" />
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
