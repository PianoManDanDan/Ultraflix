import React from 'react';
import { useContentful, HookResponse } from 'react-contentful';
import { MovieSlide } from './subcomponents/MovieSlide/src';
import { MovieSlideProps } from './subcomponents/MovieSlide/src/types';
import { MovieSlidePropsMapper } from './utils';
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

	console.error(filmListContent);

	const mappedContent: MovieSlideProps[] = MovieSlidePropsMapper(
		filmListContent.data['fields'].movies
	);

	return (
		<div>
			<p>What&apos;s On in the cinema</p>
			<MovieSlide {...mappedContent[0]} />
			<MovieSlide {...mappedContent[1]} />
			<MovieSlide {...mappedContent[2]} />
		</div>
	);
};
