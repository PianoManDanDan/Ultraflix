import React from 'react';
import { CarouselContainer, CarouselContainerProps } from '../src';
import { mockMovieList } from './data/MockMovieList.data';
import { ImageProps } from '../../../../../Image/src';

export default {
	title: 'CarouselContainer',
	component: CarouselContainer,
};

const leftChevron: ImageProps = {
	url: '/left-chevron.svg',
	description: 'Movie Slide Image',
};

const rightChevron: ImageProps = {
	url: '/right-chevron.svg',
	description: 'Movie Slide Image',
};

const carouselProps: CarouselContainerProps = {
	movieList: mockMovieList,
	leftChevron,
	rightChevron,
};

export const Story = () => <CarouselContainer {...carouselProps} />;
