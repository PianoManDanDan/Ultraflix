import React from 'react';
import { Header, useGetContentfulHeader } from '../components/Header/src';
import { Footer, useGetContentfulFooter } from '../components/Footer/src';
import { WhatsOn, useGetContentfulWhatsOn } from '../components/WhatsOn/src';
import { useGetWhatsOnContent } from '../components/WhatsOn/src/utils/UseGetWhatsOnContent';

export const HomePage: React.FC<{}> = () => {
	const headerContent = useGetContentfulHeader('4V1H6JAO1iUCB0a9RW1kIs');
	const footerContent = useGetContentfulFooter('4psLuIzH33I6TptbtKJkVX');
	const whatsOnContent = useGetWhatsOnContent('3eClse9t6aIwURH79xlUAK');

	if (!headerContent || !footerContent || !whatsOnContent) {
		return null;
	}

	// get MovieById("tt1375666");
	// get idFromimdb("The Wrong Trousers");

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
