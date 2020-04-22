import React from 'react';
import { HookResponse, useContentful } from 'react-contentful';
import { Header } from '../../src';

export const ExampleStory = () => {
	const headerContent: HookResponse = useContentful({
		id: '4psLuIzH33I6TptbtKJkVX',
	});

	if (headerContent.loading || !headerContent.fetched) {
		return null;
	}

	if (headerContent.error) {
		console.error(headerContent.error);
		return null;
	}

	if (!headerContent.data) {
		return <p>Page does not exist.</p>;
	}

	return (
		<Header
			logo={{
				url: headerContent.data['fields'].logo['fields'].file.url,
				description: headerContent.data['fields'].logo['fields'].description,
			}}
		/>
	);
};
