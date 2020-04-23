import React from 'react';
import { Footer } from '../../src';

const logo = require('../assets/logo.png');

export const FooterStory = () => (
	<Footer
		copyrightText="Test Copyright"
		logo={{
			url: logo,
			description: 'Logo Description',
		}}
		companyText="Test Company"
	/>
);
