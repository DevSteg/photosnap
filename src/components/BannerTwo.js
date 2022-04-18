import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BannerTwo = () => {
	return (
		<>
			<section className="banner">
				<img
					src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner2.jpg"
					alt="Banner Two, Laptop on desk"
					className="banner-img"
				/>
				<div className="banner-info banner-white">
					<h3 className="banner-title">Beautiful Stories Every Time</h3>
					<p className="banner-para">
						We provide design templates to ensure your stories look terrific.
						Easily add photos, text, embeded maps and media from other networks.
						Then share your story with everyone.
					</p>
					<a className="banner-cta" href="#0">
						View the stories <FontAwesomeIcon icon={faArrowRightLong} />
					</a>
				</div>
			</section>
		</>
	);
};

export default BannerTwo;
