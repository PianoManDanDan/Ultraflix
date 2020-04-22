import React from 'react';
import {
	ContentfulClient,
	ContentfulProvider,
	ContentfulClientInterface,
} from 'react-contentful';
import { Header } from '../src';

export default {
	title: 'Header',
	component: Header,
};

export const Story = () => {
	const contentfulClient: ContentfulClientInterface = ContentfulClient({
		accessToken: 'im2Om8TMefwnoIwcZsknuuh3mKseOiNucWFLwjsJKYg',
		space: 'v9yjf2k31vk7',
	});

	return (
		<ContentfulProvider client={contentfulClient}>
			<Header />
		</ContentfulProvider>
	);
};
