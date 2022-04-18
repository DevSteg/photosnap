import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	// Hook to update the screen size when required
	const [screenwWidth, setScreenWidth] = useState(window.innerWidth);
	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", changeWidth);

		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);

	// Check the size of the screen then choose nav accordingly.
	let whatNav = "";
	if (screenwWidth >= 600) {
		whatNav = (
			<>
				<div>
					<ul className="nav-list">
						<li className="list-item">
							<a href="#0">Stories</a>
						</li>
						<li className="list-item">
							<a href="#0">Features</a>
						</li>
						<li className="list-item">
							<a href="#0">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="invite-btn">
					<a href="#0">Get an Invite</a>
				</div>
			</>
		);
	} else {
		whatNav = (
			<>
				<FontAwesomeIcon icon={faBars} />
			</>
		);
	}
	return (
		<nav className="navbar">
			<div>
				<img
					src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo.svg"
					alt="PhotoSnap Logo"
				/>
			</div>
			{whatNav}
		</nav>
	);
};

export default Navbar;
