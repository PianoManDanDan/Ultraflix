import * as contentful from 'react-contentful';
import { useGetContentfulContent } from '../utils';
import { ContentfulResponse } from '../types';

const mockUseContentful = jest.spyOn(contentful, 'useContentful');

describe('useGetContentfulContent', () => {
	const mockData = {
		fields: 'some data',
	};

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When useContentful returns fetched, not loading, and data', () => {
		it('Returns the response as ContentfulResponse type', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: false,
				data: mockData,
			});

			const expectedResult: ContentfulResponse = {
				loading: false,
				error: false,
				data: mockData,
			};

			// Act
			const result = useGetContentfulContent('mockId');

			// Assert
			expect(result).toEqual(expectedResult);
			expect(mockUseContentful).toHaveBeenCalled();
		});
	});

	describe('When useContentful returns loading', () => {
		it('Returns the response as ContentfulResponse type', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: true,
				loading: true,
			});

			const expectedResult: ContentfulResponse = {
				loading: true,
				error: false,
			};

			// Act
			const result = useGetContentfulContent('mockId');

			// Assert
			expect(result).toEqual(expectedResult);
			expect(mockUseContentful).toHaveBeenCalled();
		});
	});

	describe('When useContentful returns not fetched', () => {
		it('Returns the response as ContentfulResponse type', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: false,
				loading: false,
			});

			const expectedResult: ContentfulResponse = {
				loading: false,
				error: false,
			};

			// Act
			const result = useGetContentfulContent('mockId');

			// Assert
			expect(result).toEqual(expectedResult);
			expect(mockUseContentful).toHaveBeenCalled();
		});
	});

	describe('When useContentful returns an error', () => {
		it('Returns the response as ContentfulResponse type', () => {
			// Arrange
			mockUseContentful.mockReturnValue({
				fetched: false,
				loading: false,
				error: {},
			});

			const expectedResult: ContentfulResponse = {
				loading: false,
				error: true,
			};

			// Stop console.error() in useGetContentfulWhatsOn
			console.error = jest.fn();

			// Act
			const result = useGetContentfulContent('mockId');

			// Assert
			expect(result).toEqual(expectedResult);
			expect(mockUseContentful).toHaveBeenCalled();
		});
	});
});
