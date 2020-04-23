import React from 'react';
import {
	ContentfulClientInterface,
	ContentfulClient,
	ContentfulProvider,
} from 'react-contentful';
import { Footer } from '../src';
import { ExampleStory } from './story/ExampleStory.story';

export default {
	title: 'Footer',
	component: Footer,
};

export const Story = () => {
	const contentfulClient: ContentfulClientInterface = ContentfulClient({
		accessToken: 'im2Om8TMefwnoIwcZsknuuh3mKseOiNucWFLwjsJKYg',
		space: 'v9yjf2k31vk7',
	});

	return (
		<ContentfulProvider client={contentfulClient}>
			<ExampleStory />
		</ContentfulProvider>
	);
};
