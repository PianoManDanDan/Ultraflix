import React from 'react';
import './Header.scss';
import { Image, ImageProps } from '../../Image/src';

export type HeaderProps = {
	logo: ImageProps;
};

export const Header: React.FC<HeaderProps> = ({ logo }) => {
	if (!logo) {
		return null;
	}
	return (
		<header className="header">
			<a className="header__logo-link" href="/">
				<Image className="header__logo" {...logo} />
			</a>
		</header>
	);
};
