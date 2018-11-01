import React from 'react';
import urlLogo from '../assets/Logo.png'
import urlLogoOfficial from '../assets/LogoOfficial.jpg'

const Header = () => {
    return (
        <header>
			<div className="header-wp">
				<div className="logo-deal">
					<img src={urlLogoOfficial} alt=""/>
				</div>
				<div className="logo">
					<img src={urlLogo} alt=""/>
				</div>
				<span></span>
			</div>
		</header>
    )
}
export default Header;
