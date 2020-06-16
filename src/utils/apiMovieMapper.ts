import { Movie } from '../types';

export const mapMoviesFromImdb = (
	apiResponse: object[]
): Movie[] => apiResponse.map((movie) => mapSingleMovie(movie));

export const mapSingleMovie = (
	apiResponse: any
): Movie => ({
	posterImage: { url: apiResponse.poster },
	title: apiResponse.title,
	runtime: apiResponse.length,
	certificate: 'Penguin Rating ;)',
	releaseYear: apiResponse.year,
	description: apiResponse.plot,
	rating: apiResponse.rating
});
