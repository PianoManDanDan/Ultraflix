import React from 'react';
import { Image } from '../../../../Image/src';

export const Arrow = (props) => {
	const { arrow, className, style, onClick } = props;
	return (
		<div
			className={className}
			style={style}
			onClick={onClick}
			onKeyPress={onClick}
			role="button"
			tabIndex={0}
		>
			<Image {...arrow} />
		</div>
	);
};
