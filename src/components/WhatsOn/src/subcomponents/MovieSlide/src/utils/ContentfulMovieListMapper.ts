import { Movie } from '../../../../../../../types';
import { contentfulMovieMapper } from '../../../../../../../utils';

export const contentfulMovieListMapper = (
	contentfulMovies: object[]
): Movie[] => contentfulMovies.map((movie) => contentfulMovieMapper(movie));
