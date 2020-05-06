import { HookResponse, useContentful } from 'react-contentful';
import { ImageProps } from '../../../../../Image/src/types';

const leftChevron: HookResponse = useContentful({
	id: '3X7T8xFIMkjRTOtQi1bd91',
});

const rightChevron: HookResponse = useContentful({
	id: 'tVJp67JuW5z12O8tsX84r',
});

export function getLeftChevron() {
	if (
		leftChevron.loading ||
		!leftChevron.fetched ||
		!leftChevron.data
	) {
		return null;
	}

	if (leftChevron.error) {
		console.error(leftChevron.error);
		return null;
	}

	return leftChevron as unknown as ImageProps;
};

export function getRightChevron() {
	if (
		rightChevron.loading ||
		!rightChevron.fetched ||
		!rightChevron.data
	) {
		return null;
	}

	if (rightChevron.error) {
		console.error(rightChevron.error);
		return null;
	}

	return rightChevron as unknown as ImageProps;
};
