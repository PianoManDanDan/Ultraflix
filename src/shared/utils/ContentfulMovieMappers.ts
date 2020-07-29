import { ContentfulMovie } from '../types';

export const contentfulMovieMapper = (movie): ContentfulMovie => ({
	contentfulId: movie['sys'].id,
	imdbId: movie['fields'].id,
	certificate: movie['fields'].certificate,
});

export const contentfulMovieListMapper = (movieList): ContentfulMovie[] =>
	movieList.map((movie) => contentfulMovieMapper(movie));
