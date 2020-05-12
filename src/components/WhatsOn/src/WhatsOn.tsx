import React from 'react';
import { CarouselContainer } from './subcomponents/CarouselContainer/src';
import { useGetContentfulWhatsOn } from './utils';
import './WhatsOn.scss';

export const WhatsOn: React.FC<{}> = () => {
	const contentfulFilmData = useGetContentfulWhatsOn('3eClse9t6aIwURH79xlUAK');

	if (!contentfulFilmData) {
		return null;
	}

	return (
		<div>
			<h1 className="whatsOn__header">{contentfulFilmData.header}</h1>
			<CarouselContainer movieList={contentfulFilmData.filmList} />
		</div>
	);
};
