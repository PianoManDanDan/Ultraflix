import React from 'react';
import { CarouselContainer } from '../src';
import { mockMovieList } from './data/MockMovieList.data';

export default {
	title: 'CarouselContainer',
	component: CarouselContainer,
};

export const Story = () => <CarouselContainer movieList={mockMovieList} />;
