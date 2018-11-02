import React from 'react';
import {Link} from 'react-router-dom';

import urlLogo from '../assets/Logo.png'
import urlLogoOfficial from '../assets/LogoOfficial.jpg';
import urlShopping from '../assets/shopping-bag.svg';
import urlChoise from '../assets/choices.svg';

const Header = () => {
    return (
        <header>
			<div className="header-wp">
				<div className="logo-deal">
					<Link to="/"><img src={urlLogoOfficial} alt=""/></Link>
				</div>
				<div className="logo">
					<img src={urlLogo} alt=""/>
				</div>
				<div className="icon-item">
					<div className="d-item"><img src={urlShopping} alt=""/></div>
					<div className="d-item"><img src={urlChoise} alt=""/></div>
				</div>
				<span></span>
			</div>
		</header>
    )
}
export default Header;