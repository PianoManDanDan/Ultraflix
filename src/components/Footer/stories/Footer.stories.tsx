import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Footer } from '../src';

export default {
	title: 'Footer',
	component: Footer,
};

export const Story = () => (
	<Footer
		copyrightText={text('Copywrite Text', '© Copyright 2020 Ultraflix Media')}
		logo={{
			url: '/logo.png',
			description: 'Logo Description',
		}}
		companyText={text('Company Text', 'A Penguin Huddle Company')}
	/>
);
