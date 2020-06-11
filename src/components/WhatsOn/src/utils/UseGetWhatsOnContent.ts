import { useGetContentfulWhatsOn } from '.';
import { WhatsOnProps } from '../types';
import { useGetMovies } from '../../../../utils/getMoviesFromAPI';
import { apiMovieMapper } from '../../../../utils/';
import { Movie } from '../../../../types';

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	const whatsOnContentfulReponse = useGetContentfulWhatsOn(contentfulID);
	console.log(whatsOnContentfulReponse);

	const movieIds = whatsOnContentfulReponse
		? whatsOnContentfulReponse.movieIds
		: [];

	// const movieIds = ['tt1375666', 'tt4154796'];

	const movieList: Movie[] = apiMovieMapper(useGetMovies(movieIds));

	console.log(movieList);

	if (!whatsOnContentfulReponse || !movieList) {
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
