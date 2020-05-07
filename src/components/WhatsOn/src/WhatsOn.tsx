import React from 'react';
import { Carousel } from './subcomponents/Carousel/src';
import { useGetContentfulWhatsOn } from './utils';

export const WhatsOn: React.FC<{}> = () => {
	const contentfulFilmData = useGetContentfulWhatsOn('3eClse9t6aIwURH79xlUAK');

	if (!contentfulFilmData) {
		return null;
	}

	return (
		<div>
			<h1 className="whatsOn__header">{contentfulFilmData.header}</h1>
			<Carousel movieList={contentfulFilmData.filmList} />
		</div>
	);
};
