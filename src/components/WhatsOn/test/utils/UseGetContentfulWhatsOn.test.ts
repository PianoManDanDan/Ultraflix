import * as contentful from 'react-contentful';
import { useGetContentfulWhatsOn } from '../../src/utils';
import { WhatsOnProps } from '../../src';

const mockUseContentful = jest.spyOn(contentful, 'useContentful');

const mockMapper = jest.fn(
	(): WhatsOnProps => ({
		heading: 'header',
		movieList: [
			{
				posterImage: { url: 'url' },
				title: 'title',
				runtime: 'runtime',
				certificate: 'certificate',
				releaseYear: 1,
			},
		],
		prevArrow: { url: 'url' },
		nextArrow: { url: 'url' },
	})
);
jest.mock('../../src/utils/ContentfulWhatsOnMapper', () => ({
	contentfulWhatsOnMapper: () => mockMapper(),
}));

describe('useGetContentfulWhatsOn', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When all data is present in the useContentful response, and object is fetched and not loading', () => {
		it('returns a call to the contentfulWhatsOnMapper', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: false,
				data: {
					fields: {
						heading: '',
						movies: [
							{
								fields: {
									posterImage: {
										fields: {
											file: {
												url: '',
											},
											description: '',
										},
									},
									title: '',
									runtime: '',
									certificate: '',
									releaseYear: 0,
								},
							},
						],
					},
				},
			});
			const expectedResult = mockMapper();
			mockMapper.mockClear();

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toStrictEqual(expectedResult);
			expect(mockMapper).toHaveBeenCalledTimes(1);
		});
	});

	describe('When contentfulResponse.loading is set to true', () => {
		it('returns null', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: true,
				data: {
					fields: { data: true },
				},
			});

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toBeNull();
		});
	});

	describe('When contentfulResponse.fetched is set to false', () => {
		it('returns null', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: false,
				loading: false,
				data: {
					fields: { data: true },
				},
			});

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toBeNull();
		});
	});

	describe('When contentfulResponse.data is set to undefined', () => {
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
		});
	});

	describe('When contentfulResponse.error is not undefined', () => {
		it('returns null', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: false,
				data: {
					fields: { data: true },
				},
				error: { error: 'error' },
			});
			console.error = jest.fn();

			// Act
			const result = useGetContentfulWhatsOn('mockId');

			// Assert
			expect(result).toBeNull();
		});
	});
});
