import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Footer } from '../src';

const logo = require('./assets/logo.png');

export default {
	title: 'Footer',
	component: Footer,
};

export const Story = () => (
	<Footer
		copyrightText={text('Copywrite Text', '© Copyright 2020 Ultraflix Media')}
		logo={{
			url: logo,
			description: 'Logo Description',
		}}
		companyText={text('Company Text', 'A Penguin Huddle Company')}
	/>
);
