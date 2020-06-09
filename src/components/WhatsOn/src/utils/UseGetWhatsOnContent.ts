import { useState, useEffect } from 'react';
import { useGetContentfulWhatsOn } from '.';
import { WhatsOnProps } from '../types';
import { useGetMovies } from '../../../../utils/getMoviesFromAPI';

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	// const [movieIds, setMovieIds] = useState(['']);

	const whatsOnContentfulReponse = useGetContentfulWhatsOn(contentfulID);
	console.log(whatsOnContentfulReponse);

	// const movieIds = whatsOnContentfulReponse
	// 	? whatsOnContentfulReponse.movieIds
	// 	: [];

	// if (whatsOnContentfulReponse) {
	// 	setMovieIds(whatsOnContentfulReponse.movieIds);
	// }

	const movieIds = ['tt1375666', 'tt4154796'];

	const movieList = useGetMovies(movieIds);

	if (!whatsOnContentfulReponse) {
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
