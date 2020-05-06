import React from 'react';
import { Image } from '../../../../../Image/src';
import { ImageProps } from '../../../../../Image/src/types/ImageTypes';

export type ArrowProps = {
	arrowImage: ImageProps;
	arrowClick: () => void;
};

export const Arrow: React.FC<ArrowProps> = ({ arrowImage, arrowClick }) => {
	if (!arrowImage) {
		return null;
	}
	return (
		<div className="arrow" onClick={arrowClick}>
			<Image {...arrowImage} />
		</div>
	);
};
