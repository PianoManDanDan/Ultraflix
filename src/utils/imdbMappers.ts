import { Movie, ContentfulMovie } from '../types';

export const imdbMovieMapper = (
	contentfulMovie: ContentfulMovie,
	imbdMovie: any
): Movie => ({
	...contentfulMovie,
	posterImage: { url: imbdMovie.poster },
	title: imbdMovie.title,
	runtime: imbdMovie.length,
	releaseYear: imbdMovie.year,
	description: imbdMovie.plot,
	rating: imbdMovie.rating,
});

export const imdbMoviesMapper = (
	contentfulMovieList: ContentfulMovie[],
	imdbMovieList: object[]
): Movie[] =>
	contentfulMovieList.map((contentfulMovie) => {
		const imdbMovie = imdbMovieList.forEach((imdbMovie) => {
			if (contentfulMovie.imdbId === imdbMovie.id) {
				return imdbMovie;
			}
		});

		return imdbMovieMapper(contentfulMovie, imdbMovie);
	});
