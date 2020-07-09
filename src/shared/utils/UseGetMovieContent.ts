import { useState } from 'react';
import { getMovieFromImdb, imdbMovieMapper, useGetContentfulContent } from '.';
import { Movie, ContentfulMovie } from '../types';
import { contentfulMovieMapper } from './MovieMappers';

export const useGetMovieContent = (contentfulID): Movie | null => {
	const contentfulResponse = useGetContentfulContent(contentfulID);
	const contentfulData = contentfulResponse.data;
	let contentfulMovie;

	try {
		if (contentfulData) {
			contentfulMovie = contentfulMovieMapper(contentfulData);
		}
	} catch (err) {
		console.error(err);
	}

	const [movie, setMovie] = useState<Movie>();
	const [movieIsLoading, setMovieIsLoading] = useState(false);

	if (contentfulMovie && !movieIsLoading) {
		setMovieIsLoading(true);

		try {
			getMovieFromImdb(contentfulMovie).then((imbdMovie) =>
				setMovie(imdbMovieMapper(contentfulMovie, imbdMovie))
			);
		} catch (err) {
			console.error(err);
		}
	}

	if (!movie) {
		return null;
	}

	return movie;
};
