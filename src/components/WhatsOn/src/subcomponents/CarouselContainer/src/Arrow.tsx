import React from 'react';
import { Image } from '../../../../../Image/src';
import { ImageProps } from '../../../../../Image/src/types/ImageTypes';

export type ArrowProps = {
	arrowImage: ImageProps;
};

export const Arrow: React.FC<ArrowProps> = ({ arrowImage }) => {
	if (!arrowImage) {
		return null;
	}
	return (
		<div className="arrow">
			<Image {...arrowImage} />
		</div>
	);
};
