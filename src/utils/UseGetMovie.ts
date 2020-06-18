import { useState } from 'react';
import { getMovieFromImdb, imdbMovieMapper } from '.';

import { Movie } from '../types';
import { useGetContentfulMovie } from './UseGetContentfulMovie';

export const useGetMovie = (contentfulID): Movie | null => {
	const contentfulMovie = useGetContentfulMovie(contentfulID);

	const [movie, setMovie] = useState<Movie>();
	const [movieIsLoading, setMovieIsLoading] = useState(false);

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
};
