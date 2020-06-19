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
	releaseYear: imbdMovie.year,
	description: imbdMovie.plot,
	rating: parseFloat(imbdMovie.rating),
});

export const imdbMoviesMapper = (
	contentfulMovieList: ContentfulMovie[],
	imdbMovieList
): Movie[] =>
	contentfulMovieList.map((contentfulMovie) => {
		const imdbMovie = imdbMovieList.find((movie) => {
			return movie.id === contentfulMovie.imdbId;
		});

		return imdbMovieMapper(contentfulMovie, imdbMovie);
	});
