import React from 'react';

export type ImageProps = {
	className?: string;
	url: string;
	description?: string;
};

export const Image: React.FC<ImageProps> = (image) => {
	if (!image || !image.url) {
		return null;
	}

	return (
		<img className={image.className} src={image.url} alt={image.description} />
	);
};
