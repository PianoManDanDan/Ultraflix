import React from 'react';
import './Header.scss';
import { ContentfulImage } from '../../../types';

export type HeaderProps = {
	logo: ContentfulImage;
};

export const Header: React.FC<HeaderProps> = ({ logo }) => {
	if (!logo) {
		return null;
	}
	return (
		<header className="header">
			<a className="header__logo-link" href="/">
				<img className="header__logo" src={logo.url} alt={logo.description} />
			</a>
		</header>
	);
};
