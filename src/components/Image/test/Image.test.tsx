import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Image, ImageProps } from '../src';

describe('Image Component', () => {
	let logo: Partial<ImageProps>;

	beforeEach(() => {
		logo = {
			url: 'logo_url',
			description: 'Logo Description',
		};
	});

	describe('When logo is undefined', () => {
		it('Returns null', () => {
			// Arrange
			logo = (undefined as unknown) as ImageProps;

			// Act
			const { container } = render(<Image {...(logo as ImageProps)} />);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When logo.url is undefined', () => {
		it('Returns null', () => {
			// Arrange
			logo.url = undefined;

			// Act
			const { container } = render(<Image {...(logo as ImageProps)} />);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When all content is defined', () => {
		it('Returns image', () => {
			// Act
			const { container } = render(<Image {...(logo as ImageProps)} />);

			// Assert
			expect(container).not.toBeEmpty();
		});
	});
});
