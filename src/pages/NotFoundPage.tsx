import React from 'react';
import { Header, useGetContentfulHeader } from '../components/Header/src';
import { Footer, useGetContentfulFooter } from '../components/Footer/src';
import { ErrorBox, useGetContentfulError } from '../components/ErrorBox/src';

export const NotFoundPage: React.FC<{}> = () => {
	const headerContent = useGetContentfulHeader('4V1H6JAO1iUCB0a9RW1kIs');
	const footerContent = useGetContentfulFooter('4psLuIzH33I6TptbtKJkVX');
	const errorContent = useGetContentfulError('4PpJVOY9GTnQy1G0NLrYd2');

	if (!headerContent || !footerContent || !errorContent) {
		return null;
	}

	const { pageTitle, ...errorBoxContent } = errorContent;

	if (pageTitle) {
		document.title = `${pageTitle}`;
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
