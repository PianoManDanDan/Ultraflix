import React from 'react';
import { text, number, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import { MovieDetails } from '../src';
import { Movie } from '../../../types';

const getMovieProps = (): Movie => ({
	contentfulID: 'id',
	posterImage: {
		url: '/movie_slide_image.jpg',
		description: 'Movie Poster Image',
	},
	title: text('Film Title', 'Happy Feet 2'),
	runtime: text('Runtime', '2 HR 4 MIN'),
	certificate: select(
		'Certificate',
		{ 'U': 'U', 'PG': 'PG', '12A': '12A', '15': '15', '18': '18' },
		'PG'
	),
	releaseYear: number('Release Year', 2020),
	description: text('Movie Description', 'This is a movie'),
	rating: number('Rating', 5, {
		range: true,
		min: 0,
		max: 10,
		step: 0.1,
	}),
});

export default {
	title: 'MovieDetails',
	component: MovieDetails,
	decorators: [StoryRouter()],
};

export const Story = () => {
	return <MovieDetails {...getMovieProps()} />;
};
