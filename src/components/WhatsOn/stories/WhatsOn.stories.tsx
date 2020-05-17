import React from 'react';
import { text } from '@storybook/addon-knobs';
import { WhatsOn, WhatsOnProps } from '../src';
import { ImageProps } from '../../Image/src';
import { mockMovieList } from './data/MockMovieList.data';

const leftChevron: ImageProps = {
	url: '/left-chevron.svg',
	description: 'Movie Slide Image',
};

const rightChevron: ImageProps = {
	url: '/right-chevron.svg',
	description: 'Movie Slide Image',
};

const whatsOnProps: WhatsOnProps = {
	header: text('Header', 'Movies at Ultraflix'),
	movieList: mockMovieList,
	leftChevron,
	rightChevron,
};

export default {
	title: 'WhatsOn',
	component: WhatsOn,
};

export const Story = () => <WhatsOn {...whatsOnProps} />;
