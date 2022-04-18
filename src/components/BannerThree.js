import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BannerThree = () => {
	return (
		<>
			<section className="banner">
				<div className="banner-info banner-white">
					<h3 className="banner-title">Designed for Everyone</h3>
					<p className="banner-para">
						Photosnap can help you create stories that resonante with your
						audience. Our tool is designed for photographers of all levels,
						brands, businesses you name it.
					</p>
					<a className="banner-cta" href="#0">
						View the stories <FontAwesomeIcon icon={faArrowRightLong} />
					</a>
				</div>
				<img
					src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner3.jpg"
					alt="Banner"
					className="banner-img"
				/>
			</section>
		</>
	);
};

export default BannerThree;
