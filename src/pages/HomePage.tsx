import React from 'react';
import { HookResponse, useContentful } from 'react-contentful';
import { Header } from '../components/Header/src';
import { HeaderProps } from '../components/Header/src/types';
import { Footer } from '../components/Footer/src';
import { FooterProps } from '../components/Footer/src/types';

const getHeaderContent = (headerContent): HeaderProps => {
	return {
		logo: {
			url: headerContent.data['fields'].logo['fields'].file.url,
			description: headerContent.data['fields'].logo['fields'].description,
		},
	};
};

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
	const headerContent: HookResponse = useContentful({
		id: '4V1H6JAO1iUCB0a9RW1kIs',
	});
	const footerContent: HookResponse = useContentful({
		id: '4psLuIzH33I6TptbtKJkVX',
	});

	if (
		headerContent.loading ||
		!headerContent.fetched ||
		!headerContent.data ||
		footerContent.loading ||
		!footerContent.fetched ||
		!footerContent.data
	) {
		return null;
	}

	if (footerContent.error) {
		console.error(footerContent.error);
		return null;
	}

	if (headerContent.error) {
		console.error(headerContent.error);
		return null;
	}

	return (
		<div className="app-page-container">
			<Header {...getHeaderContent(headerContent)} />
			<div className="app-page-content-container" />
			<Footer {...getFooterContent(footerContent)} />
		</div>
	);
};
