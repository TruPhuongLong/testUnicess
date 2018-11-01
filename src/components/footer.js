import React from 'react';
import urlLogo from '../assets/Logo.png';

const Footer = () => {
    return (
		<footer>
			<div className="footer-img">
				<img src={urlLogo} alt=""/>
			</div>
			<div className="footer-info">
				<p>Numero Viet Nam | Copyright2018 | All Rights Reserved</p>
				<span>Privacy Policy - Term & Conditionals - Disclaimer</span>
			</div>
		</footer>
    )
}
export default Footer;