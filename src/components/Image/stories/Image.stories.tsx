import React from 'react';
import { Image } from '../src';

export default {
	title: 'Image',
	component: Image,
};

export const Story = () => (
	<div className="container">
		<Image url="/logo.png" description="Logo Description" />
	</div>
);
