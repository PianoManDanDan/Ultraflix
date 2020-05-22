import { contentfulWhatsOnMapper } from '../../src/utils/ContentfulWhatsOnMapper';
import { MovieSlideProps } from '../../src/subcomponents/MovieSlide/src';
import { ImageProps } from '../../../Image/src';
import { WhatsOnProps } from '../../src';

jest.mock('../../src/subcomponents/MovieSlide/src', () => ({
	contentfulMovieListMapper: (): MovieSlideProps[] => [
		{
			posterImage: {
				url: 'Movie slide props mapper url',
			},
			title: 'title',
			runtime: 'runtime',
			certificate: 'certificate',
			releaseYear: 0,
		},
	],
}));

jest.mock('../../../Image/src', () => ({
	contentfulImageMapper: (): ImageProps => ({
		url: 'Image mapper url',
	}),
}));

describe('contentfulWhatsOnMapper', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When passed data in correct shape', () => {
		it('should return data mapped to WhatsOnProps type', () => {
			// Arrange
			const mockContentfulData = {
				fields: {
					heading: 'Heading',
					movies: ['movie'],
					leftChevron: 'leftChevron',
					rightChevron: 'rightChevron',
				},
			};

			// Act
			const result = contentfulWhatsOnMapper(mockContentfulData);

			// Assert
			expect(result).toStrictEqual(result as WhatsOnProps);
		});
	});
});
