import React from 'react';
import { Carousel } from './subcomponents/Carousel/src';
import { useGetContentfulWhatsOn } from './utils';
import './WhatsOn.scss';

export const WhatsOn: React.FC<{}> = () => {
	const contentfulFilmData = useGetContentfulWhatsOn('3eClse9t6aIwURH79xlUAK');

	if (!contentfulFilmData) {
		return null;
	}

	return (
		<div>
			<h1 className="whats-on__header">{contentfulFilmData.header}</h1>
			<Carousel movieList={contentfulFilmData.filmList} />
		</div>
	);
};
