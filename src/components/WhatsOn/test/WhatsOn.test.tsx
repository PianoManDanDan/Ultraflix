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
	let whatsOnContent: Partial<WhatsOnProps>;

	beforeEach(() => {
		whatsOnContent = {
			heading: 'Test',
			movieList: [
				{
					posterImage: {
						url: '',
						description: '',
					},
					title: '',
					runtime: '',
					certificate: '',
					releaseYear: 0,
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

	describe('Renders component with heading and slider', () => {
		it('When all content is defined', () => {
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

	describe('Returns null', () => {
		it('When heading is undefined', () => {
			// Arrange
			whatsOnContent.heading = undefined;

			// Act
			const { container } = render(
				<WhatsOn {...(whatsOnContent as WhatsOnProps)} />
			);

			// Assert
			expect(container.innerHTML).toBeEmpty();
		});

		it('When movieList is undefined', () => {
			// Arrange
			whatsOnContent.movieList = undefined;

			// Act
			const { container } = render(
				<WhatsOn {...(whatsOnContent as WhatsOnProps)} />
			);

			// Assert
			expect(container.innerHTML).toBeEmpty();
		});

		it('When movieList is empty', () => {
			// Arrange
			whatsOnContent.movieList = [];

			// Act
			const { container } = render(
				<WhatsOn {...(whatsOnContent as WhatsOnProps)} />
			);

			// Assert
			expect(container.innerHTML).toBeEmpty();
		});

		it('When prevArrow is undefined', () => {
			// Arrange
			whatsOnContent.prevArrow = undefined;

			// Act
			const { container } = render(
				<WhatsOn {...(whatsOnContent as WhatsOnProps)} />
			);

			// Assert
			expect(container.innerHTML).toBeEmpty();
		});

		it('When nextArrow is undefined', () => {
			// Arrange
			whatsOnContent.nextArrow = undefined;

			// Act
			const { container } = render(
				<WhatsOn {...(whatsOnContent as WhatsOnProps)} />
			);

			// Assert
			expect(container.innerHTML).toBeEmpty();
		});
	});
});
