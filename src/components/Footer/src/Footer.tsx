import React from 'react';
import { ContentfulImage } from '../../../types';
// import './Footer.scss';

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
	return (
		<div className="footer">
			<div>{copyrightText}</div>
			<img src={logo.url} alt={logo.description} />
			<div>{companyText}</div>
		</div>
	);
};
