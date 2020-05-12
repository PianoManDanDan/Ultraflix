import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import { useContentful } from 'react-contentful';
import { WhatsOn } from '../src';
import { CarouselContainer } from '../src/subcomponents/CarouselContainer/src';

jest.mock('react-contentful');
jest.mock('../src/subcomponents/Carousel/src');

describe('WhatsOn Component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it('renders the correct heading', () => {
		// Arrange
		const mockHeading = 'test Heading';
		useContentful.mockReturnValue({
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
		CarouselContainer.mockReturnValue('');

		// Act
		const { container } = render(<WhatsOn />);

		// Assert
		expect(container).toHaveTextContent(mockHeading);
	});

	it('renders the Carousel component', () => {
		// Arrange
		const mockCarousel = 'Carousel Component';
		useContentful.mockReturnValue({
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
		CarouselContainer.mockReturnValue(mockCarousel);

		// Act
		const { container } = render(<WhatsOn />);

		// Assert
		expect(container).toHaveTextContent(mockCarousel);
	});
});
