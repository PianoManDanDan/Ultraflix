import { ContentfulMovie, Movie } from '../types';
import { movieMapper, movieListMapper } from '../utils';
import {
	mockMappedContentfulMovie1,
	mockImdbMovieResponse1,
	mockMappedMovie1,
	mockMappedContentfulMovie2,
	mockMappedMovie2,
	mockImdbMovieResponse2,
} from './data/MovieMapperTest.data';

describe('imdbMovieMapper', () => {
	describe('When passed a object of the ContentfulMovie type and data in correct shape', () => {
		it('should return data mapped to Movie type', () => {
			// Act
			const result = movieMapper(
				mockMappedContentfulMovie1,
				mockImdbMovieResponse1
			);

			// Assert
			expect(result).toStrictEqual(mockMappedMovie1);
		});
	});
});

describe('imdbMovieListMapper', () => {
	describe('When passed an array of objects of the ContentfulMovie type and an array of data in the correct shape', () => {
		it('should return the data mapped to Movie array type', () => {
			// Arrange
			const mockContentfulMovieList: ContentfulMovie[] = [
				mockMappedContentfulMovie1,
				mockMappedContentfulMovie2,
			];

			const mockImdbReponseData = [
				mockImdbMovieResponse1,
				mockImdbMovieResponse2,
			];

			const expectedResult: Movie[] = [mockMappedMovie1, mockMappedMovie2];

			// Act
			const result = movieListMapper(
				mockContentfulMovieList,
				mockImdbReponseData
			);

			// Assert
			expect(result).toStrictEqual(expectedResult);
		});
	});
});
