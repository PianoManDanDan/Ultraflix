import { contentfulWhatsOnMapper } from '../../src/utils/ContentfulWhatsOnMapper';
import { Movie } from '../../../../types';
import { ImageProps } from '../../../Image/src';
import { WhatsOnProps } from '../../src';

const mockContentfulMovieListMapper = jest.fn((movieList) => movieList);

jest.mock('../../src/subcomponents/MovieSlide/src', () => ({
	contentfulMovieListMapper: (movieList) =>
		mockContentfulMovieListMapper(movieList),
}));

const mockContentfulImageMapper = jest.fn((image) => image);

jest.mock('../../../Image/src', () => ({
	contentfulImageMapper: (image) => mockContentfulImageMapper(image),
}));

describe('contentfulWhatsOnMapper', () => {
	const mockMovieList: Movie[] = [
		{
			contentfulId: 'id',
			imdbId: 'id',
			posterImage: {
				url: 'Movie slide props mapper url',
			},
			title: 'title',
			runtime: 'runtime',
			certificate: 'certificate',
			releaseYear: 0,
			description: 'About some penguins',
			rating: 5,
		},
	];

	const mockPrevArrow: ImageProps = {
		url: 'prevArrow url',
	};

	const mockNextArrow: ImageProps = {
		url: 'nextArrow url',
	};

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When passed data in correct shape', () => {
		it('should return data mapped to WhatsOnProps type', () => {
			// Arrange
			const mockContentfulData = {
				fields: {
					heading: 'Heading',
					items: mockMovieList,
					prevArrow: mockPrevArrow,
					nextArrow: mockNextArrow,
				},
			};

			const expectedResult: WhatsOnProps = {
				heading: 'Heading',
				movieList: mockMovieList,
				prevArrow: mockPrevArrow,
				nextArrow: mockNextArrow,
			};

			// Act
			const result = contentfulWhatsOnMapper(mockContentfulData);

			// Assert
			expect(result).toStrictEqual(expectedResult);
			expect(mockContentfulMovieListMapper).toHaveBeenCalledWith(
				mockContentfulData.fields.items
			);
			expect(mockContentfulImageMapper).toHaveBeenCalledWith(
				mockContentfulData.fields.prevArrow
			);
			expect(mockContentfulImageMapper).toHaveBeenCalledWith(
				mockContentfulData.fields.nextArrow
			);
		});
	});
});
