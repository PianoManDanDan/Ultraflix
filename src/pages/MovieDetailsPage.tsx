import React from 'react';
import { Header, useGetContentfulHeader } from '../components/Header/src';
import { Footer, useGetContentfulFooter } from '../components/Footer/src';
import { MovieDetails } from '../components/MovieDetails/src';
import { Movie } from '../types';

export const MovieDetailsPage: React.FC<Movie> = (movie) => {
	const headerContent = useGetContentfulHeader('4V1H6JAO1iUCB0a9RW1kIs');
	const footerContent = useGetContentfulFooter('4psLuIzH33I6TptbtKJkVX');

	if (!headerContent || !footerContent) {
		return null;
	}

	return (
		<div className="app-page-container">
			<Header {...headerContent} />
			<div className="app-page-content-container">
				<MovieDetails {...movie} />
			</div>
			<Footer {...footerContent} />
		</div>
	);
};
