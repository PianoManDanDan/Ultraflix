import React from 'react';
import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = (image) => {
	if (!image || !image.url) {
		return null;
	}

	return (
		<img className={image.className} src={image.url} alt={image.description} />
	);
};
