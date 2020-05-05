import React from 'react';
import {
	ContentfulClient,
	ContentfulClientInterface,
	ContentfulProvider,
} from 'react-contentful';
import { WhatsOn } from '../src';

export default {
	title: 'WhatsOn',
	component: WhatsOn,
};

export const Story = () => {
	const contentfulClient: ContentfulClientInterface = ContentfulClient({
		accessToken: 'im2Om8TMefwnoIwcZsknuuh3mKseOiNucWFLwjsJKYg',
		space: 'v9yjf2k31vk7',
	});
	return (
		<ContentfulProvider client={contentfulClient}>
			<WhatsOn />
		</ContentfulProvider>
	);
};
