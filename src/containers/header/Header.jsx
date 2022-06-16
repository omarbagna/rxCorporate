import React from 'react';
import './header.css';
import headerImage from '../../assets/headerImage.png';

const Header = () => {
	return (
		<div className="gpt3__header section__padding" id="home">
			<div className="gpt3__header-image">
				<img src={headerImage} alt="Bagna's Head" />
			</div>

			<div className="gpt3__header-content">
				<h1 className="gradient__text">
					Tired of waiting days for your insurance to come through for you to
					visit a hospital?
				</h1>
				<p>
					We are here for you. Providing a direct connection between you and on
					demand healthcare.
				</p>

				<div className="gpt3__header-content__button">
					<a href="google.com" target="_blank" rel="noreferrer">
						<button type="button">Get Started</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
