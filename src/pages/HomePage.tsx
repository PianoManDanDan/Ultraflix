import React from 'react';
import { HookResponse, useContentful } from 'react-contentful';
import { Header, headerPropsMapper } from '../components/Header/src';
import { Footer, footerPropsMapper } from '../components/Footer/src';

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
			<Header {...headerPropsMapper(headerContent)} />
			<div className="app-page-content-container" />
			<Footer {...footerPropsMapper(footerContent)} />
		</div>
	);
};
