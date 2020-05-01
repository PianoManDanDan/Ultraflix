import React from 'react';
import { Image } from '../../Image/src';
import { FooterProps } from './types';
import './Footer.scss';

export const Footer: React.FC<FooterProps> = ({
	copyrightText,
	logo,
	companyText,
}) => (
	<div className="footer">
		<div className="app-content-container">
			<div className="row">
				<div className="footer__text col-xs-12 col-md-4">
					<span className="footer__copyright-text">{copyrightText}</span>
				</div>
				<div className="footer__logo col-xs-12 col-md-4">
					<Image {...logo} />
				</div>
				<div className="footer__text col-xs-12 col-md-4">
					<span>{companyText}</span>
				</div>
			</div>
		</div>
	</div>
);
