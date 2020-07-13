import { useState } from 'react';
import {
	getMovieFromImdb,
	imdbMovieMapper,
	useGetContentfulContent,
	contentfulMovieMapper,
} from '.';
import { Movie } from '../types';

export const useGetMovieContent = (contentfulId: string): Movie | null => {
	const contentfulResponse = useGetContentfulContent(contentfulId);
	const contentfulData = contentfulResponse.data;
	let contentfulMovie;

	const [movie, setMovie] = useState<Movie>();
	const [movieIsLoading, setMovieIsLoading] = useState(false);

	try {
		if (contentfulData) {
			contentfulMovie = contentfulMovieMapper(contentfulData);
		}

		if (contentfulMovie && !movieIsLoading) {
			setMovieIsLoading(true);

			getMovieFromImdb(contentfulMovie).then((imbdMovie) =>
				setMovie(imdbMovieMapper(contentfulMovie, imbdMovie))
			);
		}

		if (!movie) {
			return null;
		}

		return movie;
	} catch (err) {
		console.error(err);
		return null;
	}
};
