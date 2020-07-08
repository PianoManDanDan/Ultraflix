import { ContentfulMovie, Movie } from '../types';
import {
	contentfulMovieMapper,
	contentfulMovieListMapper,
	imdbMovieMapper,
	imdbMovieListMapper,
} from '../utils';
import {
	mockContentfulMovieResponse1,
	mockContentfulMovieResponse2,
	mockMappedContentfulMovie1,
	mockMappedContentfulMovie2,
	mockImdbMovieResponse1,
	mockImdbMovieResponse2,
	mockMappedMovie1,
	mockMappedMovie2,
} from './data/MovieMapperTest.data';

describe('contentfulMovieMapper', () => {
	describe('When passed data in the correct shape', () => {
		it('should return data mapped to ContentfulMovie type', () => {
			// Act
			const result = contentfulMovieMapper(mockContentfulMovieResponse1);

			// Assert
			expect(result).toStrictEqual(mockMappedContentfulMovie1);
		});
	});
});

describe('contentfulMovieListMapper', () => {
	describe('When passed an array of data in the correct shape', () => {
		it('should return the data mapped to ContentfulMovie array type', () => {
			// Arrange
			const mockContentfulReponseData = [
				mockContentfulMovieResponse1,
				mockContentfulMovieResponse2,
			];

			const expectedResult: ContentfulMovie[] = [
				mockMappedContentfulMovie1,
				mockMappedContentfulMovie2,
			];

			// Act
			const result = contentfulMovieListMapper(mockContentfulReponseData);

			// Assert
			expect(result).toStrictEqual(expectedResult);
		});
	});
});

describe('imdbMovieMapper', () => {
	describe('When passed a object of the ContentfulMovie type and data in correct shape', () => {
		it('should return data mapped to Movie type', () => {
			// Act
			const result = imdbMovieMapper(
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
			const result = imdbMovieListMapper(
				mockContentfulMovieList,
				mockImdbReponseData
			);

			// Assert
			expect(result).toStrictEqual(expectedResult);
		});
	});
});
