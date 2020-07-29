import React from 'react';
import { Header, useGetContentfulHeader } from '../components/Header/src';
import { Footer, useGetContentfulFooter } from '../components/Footer/src';
import { MovieDetails } from '../components/MovieDetails/src';
import { useGetMovieContent } from '../shared/utils';

export const MovieDetailsPage = ({ match }) => {
	const headerContent = useGetContentfulHeader('4V1H6JAO1iUCB0a9RW1kIs');
	const footerContent = useGetContentfulFooter('4psLuIzH33I6TptbtKJkVX');
	const movieContent = useGetMovieContent(match.params.movieContentfulID);

	if (!headerContent || !footerContent || !movieContent) {
		return null;
	}

	if (movieContent.title) {
		document.title = `Ultraflix - ${movieContent.title}`;
	}

	return (
		<div className="app-page-container">
			<Header {...headerContent} />
			<div className="app-page-content-container">
				<MovieDetails {...movieContent} />
			</div>
			<Footer {...footerContent} />
		</div>
	);
};
