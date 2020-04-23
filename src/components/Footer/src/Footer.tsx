import React from 'react';
import { ContentfulImage } from '../../../types';
import './Footer.scss';

export type FooterProps = {
	copyrightText: string;
	logo: ContentfulImage;
	companyText: string;
};

export const Footer: React.FC<FooterProps> = ({
	copyrightText,
	logo,
	companyText,
}) => {
	if (
		!copyrightText ||
		!logo ||
		!logo.url ||
		!logo.description ||
		!companyText
	) {
		return null;
	}

	return (
		<div className="footer">
			<div>{copyrightText}</div>
			<img className="footer__logo" src={logo.url} alt={logo.description} />
			<div>{companyText}</div>
		</div>
	);
};
