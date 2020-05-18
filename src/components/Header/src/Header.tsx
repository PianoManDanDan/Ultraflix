import React from 'react';
import { Image } from '../../Image/src';
import { HeaderProps } from './types';
import './Header.scss';

export const Header: React.FC<HeaderProps> = ({ logo }) => {
	if (!logo) {
		return null;
	}
	return (
		<header className="header">
			<div className="header__logo">
				<a className="" href="/">
					<Image {...logo} />
				</a>
			</div>
		</header>
	);
};
