import { contentfulWhatsOnMapper } from '../../src/utils';
import { WhatsOnProps } from '../../src';
import * as MovieSlidePropsMapper from '../../src/subcomponents/MovieSlide/src/utils/MovieSlidePropsMapper';
import * as ImageMapper from '../../../Image/src/utils/ContentfulImageMapper';

const mockMovieSlidePropsMapper = jest.spyOn(
	MovieSlidePropsMapper,
	'movieSlidePropsMapper'
);
const mockContentfulImageMapper = jest.spyOn(
	ImageMapper,
	'contentfulImageMapper'
);

describe('contentfulWhatsOnMapper', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	describe('When passed expected data', () => {
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
			const result = contentfulWhatsOnMapper(mockUseContentfulResponse);
			// Assert
			expect(result).toStrictEqual(result as WhatsOnProps);
		});
	});
});
