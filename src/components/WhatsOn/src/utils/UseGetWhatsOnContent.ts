import { useState } from 'react';
import { useGetContentfulWhatsOn } from '.';
import { WhatsOnProps } from '../types';
import { getMoviesFromImdb, imdbMoviesMapper } from '../../../../utils';

import { Movie } from '../../../../types';

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	const whatsOnContentfulReponse = useGetContentfulWhatsOn(contentfulID);

	const movieIds = whatsOnContentfulReponse
		? whatsOnContentfulReponse.movieIds
		: null;

	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [movieListIsLoading, setMovieListIsLoading] = useState(false);

	if (movieIds && !movieListIsLoading) {
		setMovieListIsLoading(true);
		console.log(movieListIsLoading);
		getMoviesFromImdb(movieIds).then((movies) =>
			setMovieList(imdbMoviesMapper(movies))
		);
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
