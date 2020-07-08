import { Movie, ContentfulMovie } from '../types';

export const imdbMovieMapper = (
	contentfulMovie: ContentfulMovie,
	imbdMovie
): Movie => ({
	...contentfulMovie,
	posterImage: {
		url: imbdMovie.poster,
		description: `${imbdMovie.title} poster image`,
	},
	title: imbdMovie.title,
	runtime: imbdMovie.length,
	releaseYear: parseInt(imbdMovie.year, 10),
	description: imbdMovie.plot,
	rating: parseFloat(imbdMovie.rating),
});

export const imdbMovieListMapper = (
	contentfulMovieList: ContentfulMovie[],
	imdbMovieList
): Movie[] =>
	contentfulMovieList.map((contentfulMovie) => {
		const imdbMovie = imdbMovieList.find((movie) => {
			return movie.id === contentfulMovie.imdbId;
		});

		return imdbMovieMapper(contentfulMovie, imdbMovie);
	});

export const contentfulMovieMapper = (movie): ContentfulMovie => ({
	contentfulId: movie['sys'].id,
	imdbId: movie['fields'].id,
	certificate: movie['fields'].certificate,
});

export const contentfulMovieListMapper = (movieList): ContentfulMovie[] =>
	movieList.map((movie) => contentfulMovieMapper(movie));
