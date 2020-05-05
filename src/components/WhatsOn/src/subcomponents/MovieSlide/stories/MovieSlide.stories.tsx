import React from 'react';
import { MovieSlide } from '../src';

export default {
	title: 'MovieSlide',
	component: MovieSlide,
};

export const Story = () => (
	<MovieSlide
		posterImage={{
			url: '/movie_slide_image.jpg',
			description: 'Movie Slide Image',
		}}
		title="Happy Feet Two"
		runtime="2 HR 4 MIN"
		certificate="PG"
		releaseYear={2020}
	/>
);
