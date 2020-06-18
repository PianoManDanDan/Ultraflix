import * as contentful from 'react-contentful';
import { useGetContentfulWhatsOn } from '../../src/utils';
import { WhatsOnProps } from '../../src';

const mockUseContentful = jest.spyOn(contentful, 'useContentful');

const mockContentfulWhatsOnMapper = jest.fn(
	(): WhatsOnProps => ({
		heading: 'header',
		movieList: [
			{
				contentfulID: 'id',
				posterImage: { url: 'url' },
				title: 'title',
				runtime: 'runtime',
				certificate: 'certificate',
				releaseYear: 1,
				description: 'About some penguins',
				rating: 5,
			},
		],
		prevArrow: { url: 'url' },
		nextArrow: { url: 'url' },
	})
);

jest.mock('../../src/utils/ContentfulWhatsOnMapper', () => ({
	contentfulWhatsOnMapper: () => mockContentfulWhatsOnMapper(),
}));

describe('useGetContentfulWhatsOn', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When useContentful returns fetched, not loading, and with data', () => {
		it('returns the result of contentfulWhatsOnMapper', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: false,
				data: {
					fields: 'some data',
				},
			});

			const expectedResult = mockContentfulWhatsOnMapper();
			mockContentfulWhatsOnMapper.mockClear();

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toStrictEqual(expectedResult);
			expect(mockContentfulWhatsOnMapper).toHaveBeenCalledTimes(1);
		});
	});

	describe('When useContentful returns loading', () => {
		it('returns null', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: true,
				data: {
					fields: 'some data',
				},
			});

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toBeNull();
			expect(mockContentfulWhatsOnMapper).not.toHaveBeenCalled();
		});
	});

	describe('When useContentful returns not fetched', () => {
		it('returns null', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: false,
				loading: false,
				data: {
					fields: 'some data',
				},
			});

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toBeNull();
			expect(mockContentfulWhatsOnMapper).not.toHaveBeenCalled();
		});
	});

	describe('When useContentful returns no data', () => {
		it('returns null', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: true,
				data: undefined,
			});

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toBeNull();
			expect(mockContentfulWhatsOnMapper).not.toHaveBeenCalled();
		});
	});

	describe('When useContentful returns an error', () => {
		it('returns null', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: false,
				data: {
					fields: 'some data',
				},
				error: { error: 'error' },
			});

			// Stop console.error() in useGetContentfulWhatsOn
			console.error = jest.fn();

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toBeNull();
			expect(mockContentfulWhatsOnMapper).not.toHaveBeenCalled();
		});
	});
});
