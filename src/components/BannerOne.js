import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";

const BannerOne = () => {
	return (
		<>
			<section className="banner">
				<div className="banner-info">
					<h3 className="banner-title">Create and Share your Photo Stories.</h3>
					<p className="banner-para">
						Photosnap is a platform for photographers and visual storytellers.
						We make it easy to share photos, tell stories and connect with
						others.
					</p>
					<a className="banner-cta" href="#0">
						Get an invite <FontAwesomeIcon icon={faArrowRightLong} />
					</a>
				</div>
				<img
					src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner1.jpg"
					alt="Banner One, Man standing on lake peir"
					className="banner-img"
				/>
			</section>
			<BannerTwo />
			<BannerThree />
		</>
	);
};

export default BannerOne;
