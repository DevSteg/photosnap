import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faYoutubeSquare,
	faTwitter,
	faPinterest,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-links">
					<div className="logo-social">
						<img
							src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo-white.svg"
							alt="Logo White"
						/>
						<div className="social-links">
							<a href="#0">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
							<a href="#0">
								<FontAwesomeIcon icon={faYoutubeSquare} />
							</a>
							<a href="#0">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href="#0">
								<FontAwesomeIcon icon={faPinterest} />
							</a>
							<a href="#0">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</div>
					</div>
					<div className="footer-nav">
						<ul>
							<li>
								<a href="#0">Home</a>
							</li>
							<li>
								<a href="#0">Stories</a>
							</li>
							<li>
								<a href="#0">Features</a>
							</li>
							<li>
								<a href="#0">Pricing</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-cta-copy">
					<a className="footer-cta" href="#0">
						Get an invite <FontAwesomeIcon icon={faArrowRightLong} />
					</a>
					<h5>Copyright 2019. All rights reserved</h5>
				</div>
			</footer>
		</>
	);
};

export default Footer;
