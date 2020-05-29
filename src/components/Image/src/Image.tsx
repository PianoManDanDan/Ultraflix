import React from 'react';
import { ImageProps } from './types';
import './Image.scss';

export const Image: React.FC<ImageProps> = (image) => {
	if (!image || !image.url) {
		return null;
	}

	return (
		<div className={`image ${image.className || ''}`}>
			<img src={image.url} alt={image.description} />
		</div>
	);
};
