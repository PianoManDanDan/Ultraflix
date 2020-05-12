import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import * as contentful from 'react-contentful';
import { WhatsOn } from '../src';
import * as carousel from '../src/subcomponents/CarouselContainer/src';

const mockUseContentful = jest.spyOn(contentful, 'useContentful');
jest.mock('../src/subcomponents/CarouselContainer/src', () => ({
	Carousel: jest.fn(),
}));
const mockCarouselContainer = jest.spyOn(carousel, 'CarouselContainer');

describe('WhatsOn Component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it('renders the correct heading', () => {
		// Arrange
		const mockHeading = 'test Heading';
		mockUseContentful.mockReturnValue({
			fetched: true,
			loading: false,
			data: {
				fields: {
					heading: mockHeading,
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
		mockCarouselContainer.mockReturnValue(<p />);

		// Act
		const { container } = render(<WhatsOn />);

		// Assert
		expect(container).toHaveTextContent(mockHeading);
	});

	it('renders the Carousel component', () => {
		// Arrange
		const mockCarouselContent = 'Carousel Component';
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
		mockCarouselContainer.mockReturnValue(<p>{mockCarouselContent}</p>);

		// Act
		const { container } = render(<WhatsOn />);

		// Assert
		expect(container).toHaveTextContent(mockCarouselContent);
	});
});
