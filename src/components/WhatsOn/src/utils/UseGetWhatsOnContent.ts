import { useState } from 'react';
import { useGetContentfulWhatsOn } from '.';
import { WhatsOnProps } from '../types';
import { getMoviesFromImdb, imdbMoviesMapper } from '../../../../shared/utils';

import { Movie } from '../../../../shared/types';

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	const whatsOnContentfulReponse = useGetContentfulWhatsOn(contentfulID);

	const contentfulMovies = whatsOnContentfulReponse
		? whatsOnContentfulReponse.movieList
		: null;

	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [movieListIsLoading, setMovieListIsLoading] = useState(false);

	if (contentfulMovies && !movieListIsLoading) {
		setMovieListIsLoading(true);
		getMoviesFromImdb(contentfulMovies).then((imdbMovies) =>
			setMovieList(imdbMoviesMapper(contentfulMovies, imdbMovies))
		);
	}

	if (!whatsOnContentfulReponse || movieList.length === 0) {
		return null;
	}

	const { heading, prevArrow, nextArrow } = whatsOnContentfulReponse;

	return {
		heading,
		movieList,
		prevArrow,
		nextArrow,
	};
};
