import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../Image/src';
import { HeaderProps } from '.';
import './Header.scss';

export const Header: React.FC<HeaderProps> = ({ logo }) => {
	if (!logo) {
		return null;
	}
	return (
		<header className="header">
			<div className="header__logo">
				<Link className="header__logo-link" to="/">
					<Image {...logo} />
				</Link>
			</div>
		</header>
	);
};
