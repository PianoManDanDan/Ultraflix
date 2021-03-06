import React from 'react';
import { Header, useGetContentfulHeader } from '../components/Header/src';
import { Footer, useGetContentfulFooter } from '../components/Footer/src';
import { WhatsOn, useGetWhatsOnContent } from '../components/WhatsOn/src';

export const HomePage: React.FC<{}> = () => {
	const headerContent = useGetContentfulHeader('4V1H6JAO1iUCB0a9RW1kIs');
	const footerContent = useGetContentfulFooter('4psLuIzH33I6TptbtKJkVX');
	const whatsOnContent = useGetWhatsOnContent('3eClse9t6aIwURH79xlUAK');

	if (!headerContent || !footerContent || !whatsOnContent) {
		return null;
	}

	return (
		<div className="app-page-container">
			<Header {...headerContent} />
			<div className="app-page-content-container">
				<WhatsOn {...whatsOnContent} />
			</div>
			<Footer {...footerContent} />
		</div>
	);
};
