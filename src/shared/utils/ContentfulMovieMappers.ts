import { ContentfulMovie } from '../types';

export const contentfulMovieMapper = (movie): ContentfulMovie => ({
	contentfulId: movie['sys'].id,
	imdbId: movie['fields'].id,
	certificate: movie['fields'].certificate,
});

export const contentfulMoviesMapper = (contentfulMovies): ContentfulMovie[] =>
	contentfulMovies.map((movie) => contentfulMovieMapper(movie));
