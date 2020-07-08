import { Movie, ContentfulMovie } from '../types';

export const movieMapper = (contentfulMovie, imbdMovie): Movie => ({
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

export const movieListMapper = (contentfulMovieList, imdbMovieList): Movie[] =>
	contentfulMovieList.map((contentfulMovie) => {
		const imdbMovie = imdbMovieList.find((movie) => {
			return movie.id === contentfulMovie.imdbId;
		});

		return movieMapper(contentfulMovie, imdbMovie);
	});

export const contentfulMovieMapper = (movie): ContentfulMovie => ({
	contentfulId: movie['sys'].id,
	imdbId: movie['fields'].id,
	certificate: movie['fields'].certificate,
});

export const contentfulMovieListMapper = (movieList): ContentfulMovie[] =>
	movieList.map((movie) => contentfulMovieMapper(movie));
