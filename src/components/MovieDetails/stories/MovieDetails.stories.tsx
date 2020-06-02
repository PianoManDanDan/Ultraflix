import React from 'react';
import { text, number, select } from '@storybook/addon-knobs';
import { MovieDetails } from '../src';

const getMovieProps = (): MovieProps => ({
	posterImage: {
		url: '/movie_slide_image.jpg',
		description: 'Movie Poster Image',
	},
	title: text('Film Title', 'Happy Feet 2'),
	rating: number('Rating', 3),
	runtime: text('Runtime', '2 HR 4 MIN'),
	certificate: select(
		'Certificate',
		{ U: 'U', PG: 'PG', Twelve: '12A', Fifteen: '15', Eighteen: '18' },
		'PG'
	),
	releaseYear: number('Release Year', 2020),
});

export default {
	title: 'MovieDetails',
	component: MovieDetails,
};

export const Story = () => {
	return <MovieDetails {...getMovieProps} />;
};
