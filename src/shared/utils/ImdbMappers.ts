import { Movie } from '../types';

export const movieMapper = (contentfulMovie, imbdMovie): Movie => ({
	contentfulId: contentfulMovie['sys'].id,
	imdbId: contentfulMovie['fields'].id,
	certificate: contentfulMovie['fields'].certificate,
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
