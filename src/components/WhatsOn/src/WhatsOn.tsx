import React from 'react';
import { CarouselContainer } from './subcomponents/CarouselContainer/src';
import { useGetContentfulWhatsOn } from './utils';
import './WhatsOn.scss';
import { MovieSlideProps } from './subcomponents/MovieSlide/src';
import { ImageProps } from '../../Image/src';

export type WhatsOnProps = {
	header: string;
	movieList: MovieSlideProps[];
	leftChevron: ImageProps;
	rightChevron: ImageProps;
};

export const WhatsOn: React.FC<{}> = () => {
	const whatsOnContent = useGetContentfulWhatsOn('3eClse9t6aIwURH79xlUAK');

	if (!whatsOnContent) {
		return null;
	}

	const { header, ...carouselContent } = whatsOnContent;

	return (
		<div>
			<div className="whats-on__header">{header}</div>
			<CarouselContainer {...carouselContent} />
		</div>
	);
};
