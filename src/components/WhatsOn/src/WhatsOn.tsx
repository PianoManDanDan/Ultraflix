import React from 'react';
import { useContentful, HookResponse } from 'react-contentful';
import { MovieSlideProps } from './subcomponents/MovieSlide/src/types';
import { movieSlidePropsMapper } from './utils';
import { Carousel } from './subcomponents/Carousel/src';

export const WhatsOn: React.FC<{}> = () => {
	const filmListContent: HookResponse = useContentful({
		id: '3eClse9t6aIwURH79xlUAK',
	});

	if (
		filmListContent.loading ||
		!filmListContent.fetched ||
		!filmListContent.data
	) {
		return null;
	}

	if (filmListContent.error) {
		console.error(filmListContent.error);
		return null;
	}

	const mappedContent: MovieSlideProps[] = movieSlidePropsMapper(
		filmListContent.data['fields'].movies
	);

	return (
		<div>
			<p>{filmListContent.data['fields'].heading}</p>
			<Carousel movieList={mappedContent} />
		</div>
	);
};
