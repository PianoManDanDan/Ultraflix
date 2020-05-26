import React from 'react';
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
				<a className="header__logo-link" href="/">
					<Image {...logo} />
				</a>
			</div>
		</header>
	);
};
