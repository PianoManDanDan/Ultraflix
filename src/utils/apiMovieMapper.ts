import { Movie } from '../types';

export const apiMovieMapper = (
	apiResponse: object[]
): Movie[] => apiResponse.map((movie) => mapMovie(movie));

export const mapMovie = (
	apiResponse: any
): Movie => ({
	posterImage: apiResponse.poster,
	title: apiResponse.title,
	runtime: apiResponse.length,
	certificate: 'Penguin Rating ;)',
	releaseYear: apiResponse.year,
	description: apiResponse.plot,
	rating: apiResponse.rating
});
