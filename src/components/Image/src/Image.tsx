import React from 'react';

export type ImageProps = {
	url: string;
	description?: string;
};

export const Image: React.FC<ImageProps> = (logo) => {
	if (!logo || !logo.url) {
		return null;
	}

	return <img src={logo.url} alt={logo.description} />;
};
