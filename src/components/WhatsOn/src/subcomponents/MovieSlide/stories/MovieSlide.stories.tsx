import React from 'react';
import { text, number, select } from '@storybook/addon-knobs';
import { MovieSlide } from '../src';
import { Movie } from '../../../../../../types'

const getMovieSlideProps = (): Movie => ({
	posterImage: {
		url: '/movie_slide_image.jpg',
		description: 'Movie Slide Image',
	},
	title: text('Film Title', 'Happy Feet 2'),
	runtime: text('Runtime', '2 HR 4 MIN'),
	certificate: select(
		'Certificate',
		{ U: 'U', PG: 'PG', Twelve: '12A', Fifteen: '15', Eighteen: '18' },
		'PG'
	),
	releaseYear: number('Release Year', 2020),
	description: text('Description', 'blah blah blah'),
	rating: number('Rating', 5)
});

export default {
	title: 'MovieSlide',
	component: MovieSlide,
};

export const Story = () => <MovieSlide {...getMovieSlideProps()} />;
