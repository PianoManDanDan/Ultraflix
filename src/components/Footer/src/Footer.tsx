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
				<div className="col-xs-2">{copyrightText}</div>
				<div className="col-xs-6">
					<Image {...logo} />
				</div>
				<div className="col-xs-2">{companyText}</div>
			</div>
		</div>
	</div>
);
