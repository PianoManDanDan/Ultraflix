import React from 'react';
import { Image, ImageProps } from '../../../../Image/src';

export type ArrowProps = {
	arrowImage: ImageProps;
	arrowClick: () => void;
};

export const Arrow: React.FC<ArrowProps> = ({
	arrowImage,
	arrowClick
}) => (
		<div className="arrow" onClick={arrowClick}>
			<Image {...arrowImage} />
		</div>
	);
