import React from 'react';
import { Image } from '../src';

export default {
	title: 'Image',
	component: Image,
};

export const Story = () => (
	<Image url="/logo.png" description="Logo Description" />
);
