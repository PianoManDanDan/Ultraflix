import * as contentful from 'react-contentful';
import * as UseContefulWhatsOnMapper from '../../src/utils/ContentfulWhatsOnMapper';
import { useGetContentfulWhatsOn } from '../../src/utils';

const mockUseContentful = jest.spyOn(contentful, 'useContentful');
const mockContentfulWhatsOnMapper = jest.spyOn(
	UseContefulWhatsOnMapper,
	'contentfulWhatsOnMapper'
);

describe('useGetContentfulWhatsOn', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When all data is present in the useContentful response', () => {
		it('returns a call to the contentfulWhatsOnMapper', () => {
			// Arrange
			const mockContentfulMapperResult = {
				header: 'header',
				movieList: [
					{
						posterImage: { url: 'url' },
						title: 'title',
						runtime: 'runtime',
						certificate: 'certificate',
						releaseYear: 1,
					},
				],
				leftChevron: { url: 'url' },
				rightChevron: { url: 'url' },
			};
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
			mockContentfulWhatsOnMapper.mockReturnValue(mockContentfulMapperResult);

			// Act
			const result = useGetContentfulWhatsOn('abc');

			// Assert
			expect(result).toStrictEqual(mockContentfulMapperResult);
			expect(mockContentfulWhatsOnMapper).toHaveBeenCalledTimes(1);
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
			const result = useGetContentfulWhatsOn('abc');

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
			const result = useGetContentfulWhatsOn('abc');

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
			const result = useGetContentfulWhatsOn('abc');

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
			const result = useGetContentfulWhatsOn('abc');

			// Assert
			expect(result).toBeNull();
			expect(console.error).toHaveBeenCalledTimes(1);
		});
	});
});
