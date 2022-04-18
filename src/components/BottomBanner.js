import React from "react";

const BottomBanner = () => {
	return (
		<>
			<section className="bottom-section">
				<div className="bottom-div">
					<img
						src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/responsive.svg"
						alt="Responsive Icon"
					/>
					<h5 className="bottom-title">100% Responsive</h5>
					<p className="bottom-para">
						No matter which device you're on, our site is fully responsive and
						stories look beautifull on any screen.
					</p>
				</div>
				<div className="bottom-div">
					<img
						src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/infinity.svg"
						alt="Infinity Icon"
					/>
					<h5 className="bottom-title">No Photo Upload Limit</h5>
					<p className="bottom-para">
						Our tool has no limits on uploads or bandwith. Freely upload in bulk
						and share all of your stories in one go.
					</p>
				</div>
				<div className="bottom-div">
					<img
						src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/social.svg"
						alt="Social Icon"
					/>
					<h5 className="bottom-title">No Photo Upload Limit</h5>
					<p className="bottom-para">
						Our tool has no limits on uploads or bandwith.Freely upload in bulk
						and share all of your stories in one go.
					</p>
				</div>
			</section>
		</>
	);
};

export default BottomBanner;
