import React from 'react';
import { render } from '@testing-library/react';
import 'jest-extended';
import { act } from 'react-dom/test-utils';
import { useGetMovieContent } from '../utils';
import {
	mockMappedContentfulMovie1,
	mockMappedMovie1,
} from './data/MovieMapperTest.data';

const mockUseGetContentfulContent = jest.fn();
const mockContentfulMovieMapper = jest.fn(() => mockMappedContentfulMovie1);
const mockGetMovieFromImdb = jest.fn(() => Promise.resolve('test'));
const mockImdbMovieMapper = jest.fn(() => mockMappedMovie1);

const MockCompontent: React.FC = () => {
	const movieContent = useGetMovieContent('mockId');

	if (!movieContent) {
		return null;
	}

	return <div>test</div>;
};

jest.mock('../utils', () => ({
	...jest.requireActual('../utils'),
	useGetContentfulContent: () => mockUseGetContentfulContent(),
	contentfulMovieMapper: () => mockContentfulMovieMapper(),
	getMovieFromImdb: () => mockGetMovieFromImdb(),
	imdbMovieMapper: () => mockImdbMovieMapper(),
}));

describe('useGetMovieContent', () => {
	const mockData = {
		fields: 'test',
	};

	let container;

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When useGetContentfulContent returns data', () => {
		it('Returns data using calls to functions', async () => {
			// Arrange
			mockUseGetContentfulContent.mockReturnValue({
				loading: false,
				error: false,
				data: mockData,
			});

			// Act
			await act(async () => {
				container = await render(<MockCompontent />).container;
			});

			// Assert
			expect(container.innerHTML).not.toBeEmpty();

			expect(mockUseGetContentfulContent).toHaveBeenCalled();
			expect(mockContentfulMovieMapper).toHaveBeenCalled();
			expect(mockGetMovieFromImdb).toHaveBeenCalled();
			expect(mockImdbMovieMapper).toHaveBeenCalled();
		});
	});

	describe('When useGetContentfulContent does not return data', () => {
		it('Returns null', async () => {
			// Arrange
			mockUseGetContentfulContent.mockReturnValue({
				loading: false,
				error: false,
			});

			// Act
			await act(async () => {
				container = await render(<MockCompontent />).container;
			});

			// Assert
			expect(container.innerHTML).toBeEmpty();

			expect(mockUseGetContentfulContent).toHaveBeenCalled();
			expect(mockContentfulMovieMapper).not.toHaveBeenCalled();
			expect(mockGetMovieFromImdb).not.toHaveBeenCalled();
			expect(mockImdbMovieMapper).not.toHaveBeenCalled();
		});
	});
});
