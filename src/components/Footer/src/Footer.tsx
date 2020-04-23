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
		<div className="footer app-content-container">
			<div className="row">
				<div className="col-xs-2">{copyrightText}</div>
				<img className="col-xs-6" src={logo.url} alt={logo.description} />
				<div className="col-xs-2">{companyText}</div>
			</div>
		</div>
	);
};
