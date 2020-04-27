import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Header } from '../src';

export default {
	title: 'Header',
	component: Header,
};

export const Story = () => {
	return (
		<Header
			logo={{
				url: '/logo.png',
				description: text('Logo Alt Text', 'Ultraflix Logo'),
			}}
		/>
	);
};
