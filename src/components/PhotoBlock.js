import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const PhotoBlock = () => {
	return (
		<>
			<section className="photo-block">
				<div>
					<img
						src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/mountains.jpg"
						alt="Mountains"
					/>
					<div className="photo-info">
						<h4 className="photo-title">The Mountains</h4>
						<p className="photo-author">By John Appleseed</p>
						<hr />
						<div className="photo-cta">
							<h4 className="cta-title">Read Story</h4>
							<FontAwesomeIcon icon={faArrowRightLong} />
						</div>
					</div>
				</div>
				<div>
					<img
						src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/cityscape.jpg"
						alt="Cityscape"
					/>
					<div className="photo-info">
						<h4 className="photo-title">Sunset Cityscapes</h4>
						<p className="photo-author">By Benjamin Cruze</p>
						<hr />
						<div className="photo-cta">
							<h4 className="cta-title">Read Story</h4>
							<FontAwesomeIcon icon={faArrowRightLong} />
						</div>
					</div>
				</div>
				<div>
					<img
						src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/hiker.jpg"
						alt="Hiker"
					/>
					<div className="photo-info">
						<h4 className="photo-title">18 Days Voyage</h4>
						<p className="photo-author">By Alexei Borodin</p>
						<hr />
						<div className="photo-cta">
							<h4 className="cta-title">Read Story</h4>
							<FontAwesomeIcon icon={faArrowRightLong} />
						</div>
					</div>
				</div>
				<div>
					<img
						src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/building.jpg"
						alt="Building"
					/>
					<div className="photo-info">
						<h4 className="photo-title">Architecturals</h4>
						<p className="photo-author">By Samantha Brooke</p>
						<hr />
						<div className="photo-cta">
							<h4 className="cta-title">Read Story</h4>
							<FontAwesomeIcon icon={faArrowRightLong} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PhotoBlock;
