export const enableTabbing = (): void => {
	const currentSlide = document.querySelector('.slick-current') as HTMLElement;
	currentSlide.tabIndex = 0;
};

export const disableTabbing = (slideIndex: number): void => {
	const currentSlide = document.querySelector(
		`[data-index='${slideIndex}']`
	) as HTMLElement;
	currentSlide.tabIndex = -1;
};
