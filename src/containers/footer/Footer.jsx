import React from 'react';
import logo from '../../assets/Head2.png';
import './footer.css';

const Footer = () => {
	return (
		<div className="gpt3__footer section__padding" id="footer">
			<div className="gpt3__footer-heading">
				<h1 className="gradient__text">
					Excellence in Healthcare.
					<br />
					Every day.
				</h1>
			</div>
			<div className="gpt3__footer-btn">
				<a href="#footer">Register Now</a>
			</div>

			<div className="gpt3__footer-links">
				<div className="gpt3__footer-links_logo">
					<img src={logo} alt="logo" />
					<p>Nationwide Healthcare </p>
					<p>Rx Health Info Systems</p>
				</div>

				<div className="gpt3__footer-links_div">
					<h4>Links</h4>
					<p>
						<a href="#home" rel="noreferrer">
							Home
						</a>
					</p>
					<p>
						<a href="#whatsthis" rel="noreferrer">
							What is this?
						</a>
					</p>
					<p>
						<a href="#benefits" rel="noreferrer">
							Benefits
						</a>
					</p>
					<p>
						<a href="#testimonies" rel="noreferrer">
							Testimonies
						</a>
					</p>
				</div>

				<div className="gpt3__footer-links_div">
					<h4>Get in touch</h4>
					<p>Accra, Ghana</p>
					<p>095-1234567</p>
					<p>info@company.net</p>
				</div>
			</div>

			<div className="gpt3__footer-copyright">
				<p>
					<a
						href="https://github.com/omarbagna"
						target="_blank"
						rel="noreferrer">
						2022 Rx Health Info Systems
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
