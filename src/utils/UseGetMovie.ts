import { useState } from 'react';
import { getMovieFromImdb, imdbMovieMapper } from '.';

import { Movie } from '../types';
import { useGetContentfulMovie } from './UseGetContentfulMovie';

export const useGetMovie = (contentfulID): Movie | null => {
	const movieContentfulResponse = useGetContentfulMovie(contentfulID);

	const movieId = movieContentfulResponse
		? movieContentfulResponse.imdbId
		: null;

	const [movie, setMovie] = useState<Movie>();
	const [movieIsLoading, setMovieIsLoading] = useState(false);

	if (movieId && !movieIsLoading) {
		setMovieIsLoading(true);
		getMovieFromImdb(movieId).then((movie) => setMovie(imdbMovieMapper(movie)));
	}

	if (!whatsOnContentfulReponse || movieList.length === 0) {
		return null;
	}

	console.log('done');
	console.log(movieList);

	const { heading, prevArrow, nextArrow } = whatsOnContentfulReponse;

	return {
		heading,
		movieList,
		prevArrow,
		nextArrow,
	};
};
