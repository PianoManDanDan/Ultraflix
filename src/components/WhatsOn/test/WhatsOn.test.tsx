import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import { WhatsOn, WhatsOnProps } from '../src';

const mockSlider = jest.fn(() => <div />);

jest.mock('react-slick', () => ({
	__esModule: true,
	default: () => mockSlider(),
}));

jest.mock('../src/utils', () => ({
	getMaxBreakpoint: (): number => 0,
}));

describe('WhatsOn Component', () => {
	const whatsOnKeys = ['heading', 'movieList', 'prevArrow', 'nextArrow'];

	let whatsOnContent: Partial<WhatsOnProps>;

	beforeEach(() => {
		whatsOnContent = {
			heading: 'Test',
			movieList: [
				{
					contentfulId: 'id',
					imdbId: 'id',
					posterImage: {
						url: '',
						description: '',
					},
					title: '',
					runtime: '',
					certificate: '',
					releaseYear: 0,
					description: 'About some penguins',
					rating: 5,
				},
			],
			prevArrow: {
				url: '',
				description: '',
			},
			nextArrow: {
				url: '',
				description: '',
			},
		};
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('When all content is defined', () => {
		it('Renders component with heading and slider', () => {
			// Arrange
			const mockHeading = 'Test';
			whatsOnContent.heading = mockHeading;

			// Act
			const { container } = render(
				<WhatsOn {...(whatsOnContent as WhatsOnProps)} />
			);

			// Assert
			expect(container).toHaveTextContent(mockHeading);
			expect(mockSlider).toHaveBeenCalledTimes(1);
		});
	});

	describe.each(whatsOnKeys)(`When %s is undefined`, (key) => {
		it('Returns null', () => {
			// Arrange
			whatsOnContent[key] = undefined;

			// Act
			const { container } = render(
				<WhatsOn {...(whatsOnContent as WhatsOnProps)} />
			);

			// Assert
			expect(container.innerHTML).toBeEmpty();
		});
	});
});
