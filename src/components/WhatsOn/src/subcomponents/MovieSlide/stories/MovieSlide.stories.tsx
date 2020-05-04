import React from 'react';
import { MovieSlide } from '../src';

export default {
	title: 'MovieSlide',
	component: MovieSlide,
};

export const Story = () => (
	<MovieSlide
		image={{
			url: '/movie_slide_image.jpg',
			description: 'Movie Slide Image',
		}}
		title="Happy Feet Two"
		runtime="2 HR 4 MIN"
		ageRating="PG"
		releaseYear="2020"
	/>
);
