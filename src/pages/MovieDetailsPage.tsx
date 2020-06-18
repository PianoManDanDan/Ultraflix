import React from 'react';
import { Header, useGetContentfulHeader } from '../components/Header/src';
import { Footer, useGetContentfulFooter } from '../components/Footer/src';
import { MovieDetails } from '../components/MovieDetails/src';
import { useGetMovie } from '../utils';

export const MovieDetailsPage = ({ match }) => {
	const headerContent = useGetContentfulHeader('4V1H6JAO1iUCB0a9RW1kIs');
	const footerContent = useGetContentfulFooter('4psLuIzH33I6TptbtKJkVX');
	const movie = useGetMovie(match.params.movieContentfulID);

	if (!headerContent || !footerContent || !movie) {
		return null;
	}

	if (movie.title) {
		document.title = `Ultraflix - ${movie.title}`;
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
