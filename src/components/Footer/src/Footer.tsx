import React from 'react';
import { Image, ImageProps } from '../../Image/src';
import './Footer.scss';

export type FooterProps = {
	copyrightText: string;
	logo: ImageProps;
	companyText: string;
};

export const Footer: React.FC<FooterProps> = ({
	copyrightText,
	logo,
	companyText,
}) => (
	<div className="footer">
		<div className="app-content-container">
			<div className="row">
				<div className="footer__text col-xs-4">{copyrightText}</div>
				<Image className="col-xs-4" {...logo} />
				<div className="footer__text col-xs-4">{companyText}</div>
			</div>
		</div>
	</div>
);
