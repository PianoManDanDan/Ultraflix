import { contentfulWhatsOnMapper } from '../../src/utils';
import { WhatsOnProps } from '../../src';
import * as contentfulMovieListMapper from '../../src/subcomponents/MovieSlide/src/utils/ContentfulMovieListMapper';
import * as contenfulImageMapper from '../../../Image/src/utils/ContentfulImageMapper';

const mockMovieSlidePropsMapper = jest.spyOn(
	contentfulMovieListMapper,
	'contentfulMovieListMapper'
);
const mockContentfulImageMapper = jest.spyOn(
	contenfulImageMapper,
	'contentfulImageMapper'
);

describe('contentfulWhatsOnMapper', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	describe('When passed valid data with correct fields and types', () => {
		it('should return correct props', () => {
			// Arrange
			const mockUseContentfulResponse = {
				fetched: true,
				loading: false,
				data: {
					fields: {
						heading: 'Heading',
						movies: ['movie'],
						leftChevron: 'leftChevron',
						rightChevron: 'rightChevron',
					},
				},
			};
			mockMovieSlidePropsMapper.mockReturnValue([
				{
					posterImage: {
						url: 'Movie slide props mapper url',
					},
					title: 'title',
					runtime: 'runtime',
					certificate: 'certificate',
					releaseYear: 0,
				},
			]);
			mockContentfulImageMapper.mockReturnValue({
				url: 'Image mapper url',
			});
			// Act
			const result = contentfulWhatsOnMapper(mockUseContentfulResponse.data);
			// Assert
			expect(result).toStrictEqual(result as WhatsOnProps);
		});
	});
});
