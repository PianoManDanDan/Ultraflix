import { useGetContentfulWhatsOn } from '.';
import { WhatsOnProps } from '../types';
import { Movie } from '../../../../types';
import { useGetMovies } from '../../../../utils/getMoviesFromAPI';

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	const whatsOnContent = useGetContentfulWhatsOn(contentfulID);

	const movieIds = ['tt1375666'];

	try {
		const movieList = useGetMovies(movieIds);
		console.log(movieList);
	} catch (err) {
		console.error(err);
	}

	return useGetContentfulWhatsOn(contentfulID);
};
