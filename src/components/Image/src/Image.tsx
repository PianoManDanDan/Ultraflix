import React from 'react';

export type ImageProps = {
	url: string;
	description?: string;
};

export const Image: React.FC<ImageProps> = (logo) => {
	if (!logo || !logo.url) {
		return null;
	}

	return (
		<img className="row col-xs-12" src={logo.url} alt={logo.description} />
	);
};
