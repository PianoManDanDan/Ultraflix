import { useState } from 'react';
import { getMovieFromImdb, imdbMovieMapper } from '.';
import { Movie } from '../types';
import {
	useGetMovieFromContentful,
	ContentfulReponse,
} from './UseGetContentfulMovie';

export const useGetMovieContent = (
	contentfulID
): ContentfulReponse & { movie?: Movie } => {
	const { loading, error, contentfulMovie } = useGetMovieFromContentful(
		contentfulID
	);

	const [movie, setMovie] = useState<Movie>();
	const [gettingMovieFromApi, setGettingMovieFromApi] = useState(false);

	if (contentfulMovie && !gettingMovieFromApi) {
		setGettingMovieFromApi(true);

		try {
			getMovieFromImdb(contentfulMovie).then((imbdMovie) =>
				setMovie(imdbMovieMapper(contentfulMovie, imbdMovie))
			);
		} catch (err) {
			console.error(err);
		}
	}

	return {
		loading,
		error,
		movie,
	};
};
