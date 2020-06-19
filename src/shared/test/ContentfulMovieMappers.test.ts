import { ContentfulMovie } from '../types';
import { contentfulMovieMapper, contentfulMovieListMapper } from '../utils';
import {
	contentfulMovieResponse1,
	contentfulMovieResponse2,
	mappedContentfulMovie1,
	mappedContentfulMovie2,
} from './data/MovieMapperTest.data';

describe('contentfulMovieMapper', () => {
	describe('When passed data in the correct shape', () => {
		it('should return data mapped to ContentfulMovie type', () => {
			// Act
			const result = contentfulMovieMapper(contentfulMovieResponse1);

			// Assert
			expect(result).toStrictEqual(mappedContentfulMovie1);
		});
	});
});

describe('contentfulMovieListMapper', () => {
	describe('When passed an array of data in the correct shape', () => {
		it('should return the data mapped to ContentfulMovie array type', () => {
			// Arrange
			const mockContentfulReponseData = [
				contentfulMovieResponse1,
				contentfulMovieResponse2,
			];

			const expectedResult: ContentfulMovie[] = [
				mappedContentfulMovie1,
				mappedContentfulMovie2,
			];

			// Act
			const result = contentfulMovieListMapper(mockContentfulReponseData);

			// Assert
			expect(result).toStrictEqual(expectedResult);
		});
	});
});
