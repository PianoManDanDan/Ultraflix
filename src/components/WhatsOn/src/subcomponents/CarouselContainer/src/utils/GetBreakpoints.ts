import sizes from '../../../../../../../globalStyles/_sizes.scss';

const formatBreakpoints = (breakpoint: string): number => {
	// Remove px from end of string (e.g 480px)
	const updatedBreakpoint = breakpoint.substring(0, breakpoint.length - 2);
	return parseInt(updatedBreakpoint, 10);
};

export const getBreakpoints = (viewportName: string) => {
	const minBreakpoint = sizes[`${viewportName}MinBreakpoint`];
	const maxBreakpoint = sizes[`${viewportName}MaxBreakpoint`];

	return {
		min: formatBreakpoints(minBreakpoint),
		max: formatBreakpoints(maxBreakpoint),
	};
};
