import React from 'react';
import { Carousel, CarouselProps } from '../src';

export default {
	title: 'Carousel',
	component: Carousel,
};

const props: CarouselProps = {
	movieList: [
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		},
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		},
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		},
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		},
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		},
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		},
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		},
		{
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Happy Feet Two',
			runtime: '2 HR 4 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		}
	],
};

export const Story = () => <Carousel {...props} />;
