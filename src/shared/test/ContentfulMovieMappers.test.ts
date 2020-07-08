import { ContentfulMovie } from '../types';
import { contentfulMovieMapper, contentfulMovieListMapper } from '../utils';
import {
	mockContentfulMovieResponse1,
	mockContentfulMovieResponse2,
	mockMappedContentfulMovie1,
	mockMappedContentfulMovie2,
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
