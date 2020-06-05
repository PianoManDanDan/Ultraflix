import React from 'react';
import { Header, useGetContentfulHeader } from '../components/Header/src';
import { Footer, useGetContentfulFooter } from '../components/Footer/src';
import { ErrorBox, useGetContentfulErrorBox } from '../components/ErrorBox/src';

export const NotFoundPage: React.FC<{}> = () => {
	const headerContent = useGetContentfulHeader('4V1H6JAO1iUCB0a9RW1kIs');
	const footerContent = useGetContentfulFooter('4psLuIzH33I6TptbtKJkVX');
	const errorBoxContent = useGetContentfulErrorBox('4PpJVOY9GTnQy1G0NLrYd2');

	if (!headerContent || !footerContent || !errorBoxContent) {
		return null;
	}

	return (
		<div className="app-page-container">
			<Header {...headerContent} />
			<div className="app-page-content-container">
				<ErrorBox {...errorBoxContent} />
			</div>
			<Footer {...footerContent} />
		</div>
	);
};
