import { Movie } from '../types';

export const imdbMovieMapper = (apiResponse: any): Partial<Movie> => ({
	posterImage: { url: apiResponse.poster },
	title: apiResponse.title,
	runtime: apiResponse.length,
	certificate: 'Penguin Rating ;)',
	releaseYear: apiResponse.year,
	description: apiResponse.plot,
	rating: apiResponse.rating,
});

export const imdbMoviesMapper = (apiResponse: object[]): Movie[] =>
	apiResponse.map((movie) => imdbMovieMapper(movie) as Movie);
