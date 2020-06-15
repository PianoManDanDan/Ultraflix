export const setTabIndex = (): void => {
	const currentSlide = document.querySelector('.slick-current') as HTMLElement;
	currentSlide.tabIndex = 0;
};

export const removeTabIndex = (elementIndex: number): void => {
	const currentSlide = document.querySelector(
		`[data-index='${elementIndex}']`
	) as HTMLElement;
	currentSlide.tabIndex = -1;
};
