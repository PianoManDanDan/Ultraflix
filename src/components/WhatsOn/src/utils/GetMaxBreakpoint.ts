import sizes from '../../../../globalStyles/_sizes.scss';

const formatBreakpoints = (breakpoint: string): number => {
	// Remove px from end of string (e.g 480px)
	const updatedBreakpoint = breakpoint.substring(0, breakpoint.length - 2);
	return parseInt(updatedBreakpoint, 10);
};

export const getMaxBreakpoint = (viewportName: string) => {
	const maxBreakpoint = sizes[`${viewportName}MaxBreakpoint`];
	return formatBreakpoints(maxBreakpoint);
};
