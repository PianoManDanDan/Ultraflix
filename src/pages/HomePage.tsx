import React from 'react';
import { HookResponse, useContentful } from 'react-contentful';
import { Footer, FooterProps } from '../components/Footer/src';

const getFooterContent = (footerContent): FooterProps => {
	return {
		copyrightText: footerContent.data['fields'].copyrightText,
		logo: {
			url: footerContent.data['fields'].logo['fields'].file.url,
			description: footerContent.data['fields'].logo['fields'].description,
		},
		companyText: footerContent.data['fields'].companyText,
	};
};

export const HomePage: React.FC<{}> = () => {
	const footerContent: HookResponse = useContentful({
		id: '4psLuIzH33I6TptbtKJkVX',
	});

	if (footerContent.loading || !footerContent.fetched || !footerContent.data) {
		return null;
	}

	if (footerContent.error) {
		console.error(footerContent.error);
		return null;
	}

	return <Footer {...getFooterContent(footerContent)} />;
};
