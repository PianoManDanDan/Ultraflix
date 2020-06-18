import { ContentfulMovie } from '../types';

export const contentfulMovieMapper = (movie): ContentfulMovie => ({
	contentfulId: movie['sys'].id,
	imdbId: movie['fields'].id,
	certificate: movie['fields'].id,
});

export const contentfulMoviesMapper = (
	contentfulMovies: object[]
): ContentfulMovie[] =>
	contentfulMovies.map((movie) => contentfulMovieMapper(movie));
