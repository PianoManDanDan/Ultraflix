import { useState } from 'react';
import { getMovieFromImdb, movieMapper, useGetContentfulContent } from '.';
import { Movie } from '../types';
import { contentfulMovieMapper } from './MovieMappers';

export const useGetMovieContent = (contentfulID): Movie | null => {
	const contentfulResponse = useGetContentfulContent(contentfulID);
	const contentfulData = contentfulResponse.data;

	const contentfulMovie = contentfulData
		? contentfulMovieMapper(contentfulResponse.data)
		: null;

	const [movie, setMovie] = useState<Movie>();
	const [movieIsLoading, setMovieIsLoading] = useState(false);

	if (contentfulMovie && !movieIsLoading) {
		setMovieIsLoading(true);

		try {
			getMovieFromImdb(contentfulMovie).then((imbdMovie) =>
				setMovie(movieMapper(contentfulMovie, imbdMovie))
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
