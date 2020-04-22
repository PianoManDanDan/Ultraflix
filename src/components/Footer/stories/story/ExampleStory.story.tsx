import React from 'react';
import { HookResponse, useContentful } from 'react-contentful';
import { Footer } from '../../src';

export const ExampleStory = () => {
	const footerContent: HookResponse = useContentful({
		id: '4psLuIzH33I6TptbtKJkVX',
	});

	if (footerContent.loading || !footerContent.fetched) {
		return null;
	}

	if (footerContent.error) {
		console.error(footerContent.error);
		return null;
	}

	if (!footerContent.data) {
		return <p>Page does not exist.</p>;
	}

	return (
		<Footer
			copyrightText={footerContent.data['fields'].copyrightText}
			logo={{
				url: footerContent.data['fields'].logo['fields'].file.url,
				description: footerContent.data['fields'].logo['fields'].description,
			}}
			companyText={footerContent.data['fields'].companyText}
		/>
	);
};
