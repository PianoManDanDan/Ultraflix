import React from 'react';
import { text } from '@storybook/addon-knobs';
import { WhatsOn, WhatsOnProps } from '../src';
import { ImageProps } from '../../Image/src';
import { mockMovieList } from './data/MockMovieList.data';

const prevArrow: ImageProps = {
	url: '/left-chevron.svg',
	description: 'Movie Slide Image',
};

const nextArrow: ImageProps = {
	url: '/right-chevron.svg',
	description: 'Movie Slide Image',
};

const getWhatsOnProps = (): WhatsOnProps => ({
	heading: text('Header', 'Movies at Ultraflix'),
	movieList: mockMovieList,
	prevArrow,
	nextArrow,
});

export default {
	title: 'WhatsOn',
	component: WhatsOn,
};

export const Story = () => <WhatsOn {...getWhatsOnProps()} />;
