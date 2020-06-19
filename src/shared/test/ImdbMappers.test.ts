import { ContentfulMovie, Movie } from '../types';
import { imdbMovieMapper, imdbMovieListMapper } from '../utils';
import {
	mappedContentfulMovie1,
	imdbMovieResponse1,
	mappedMovie1,
	mappedContentfulMovie2,
	mappedMovie2,
	imdbMovieResponse2,
} from './data/MovieMapperTest.data';

describe('imdbMovieMapper', () => {
	describe('When passed a object of the ContentfulMovie type and data in correct shape', () => {
		it('should return data mapped to Movie type', () => {
			// Act
			const result = imdbMovieMapper(
				mappedContentfulMovie1,
				imdbMovieResponse1
			);

			// Assert
			expect(result).toStrictEqual(mappedMovie1);
		});
	});
});

describe('imdbMovieListMapper', () => {
	describe('When passed an array of objects of the ContentfulMovie type and an array of data in the correct shape', () => {
		it('should return the data mapped to Movie array type', () => {
			// Arrange
			const mockContentfulMovieList: ContentfulMovie[] = [
				mappedContentfulMovie1,
				mappedContentfulMovie2,
			];

			const mockImdbReponseData = [imdbMovieResponse1, imdbMovieResponse2];

			const expectedResult: Movie[] = [mappedMovie1, mappedMovie2];

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
