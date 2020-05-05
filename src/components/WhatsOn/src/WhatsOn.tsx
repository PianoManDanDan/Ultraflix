import React from 'react';
import { useContentful, HookResponse } from 'react-contentful';
import { MovieSlideProps } from './subcomponents/MovieSlide/src/types';
import { MovieSlidePropsMapper } from './utils';
import { Carousel } from './subcomponents/Carousel/src';
// import { SubThing } from './subcomponents/Carousel';

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

	const mappedContent: MovieSlideProps[] = MovieSlidePropsMapper(
		filmListContent.data['fields'].movies
	);

	return (
		<div>
			<p>{filmListContent.data['fields'].heading}</p>
			<Carousel movieList={mappedContent} />
		</div>
	);
};
