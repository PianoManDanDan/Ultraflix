import { useState } from 'react';
import { useGetContentfulWhatsOn } from '.';
import { WhatsOnProps } from '../types';
import { getMovies } from '../../../../utils/getMoviesFromAPI';
import { Movie } from '../../../../types';

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	const whatsOnContentfulReponse = useGetContentfulWhatsOn(contentfulID);
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [movieListIsLoading, setMovieListIsLoading] = useState(false);

	const movieIds = whatsOnContentfulReponse
		? whatsOnContentfulReponse.movieIds
		: null;

	if (movieIds && !movieListIsLoading) {
		setMovieListIsLoading(true);
		console.log(movieListIsLoading);
		getMovies(movieIds).then((movies) => setMovieList(movies));
	}

	if (!whatsOnContentfulReponse || movieList.length === 0) {
		return null;
	}

	console.log('done');
	console.log(movieList);

	const { heading, prevArrow, nextArrow } = whatsOnContentfulReponse;

	return {
		heading,
		movieList: [],
		prevArrow,
		nextArrow,
	};
};
