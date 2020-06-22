import { useState } from 'react';
import { useGetContentfulWhatsOn } from '.';
import { WhatsOnProps } from '../types';
import {
	getMovieListFromImdb,
	imdbMovieListMapper,
} from '../../../../shared/utils';

import { Movie } from '../../../../shared/types';

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	const whatsOnContentfulReponse = useGetContentfulWhatsOn(contentfulID);

	const contentfulMovieList = whatsOnContentfulReponse
		? whatsOnContentfulReponse.movieList
		: null;

	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [movieListIsLoading, setMovieListIsLoading] = useState(false);

	if (contentfulMovieList && !movieListIsLoading) {
		setMovieListIsLoading(true);
		getMovieListFromImdb(contentfulMovieList).then((imdbMovieList) =>
			setMovieList(imdbMovieListMapper(contentfulMovieList, imdbMovieList))
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
