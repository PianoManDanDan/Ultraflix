import React from 'react';
import { Carousel } from '../src';
import { mockMovieList } from './data/MockMovieList.data';

export default {
	title: 'Carousel',
	component: Carousel,
};

export const Story = () => <Carousel {...mockMovieList} />;
