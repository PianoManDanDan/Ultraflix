import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header, HeaderProps } from '../src';
import { ImageProps } from '../../Image/src';

describe('Header Component', () => {
	let headerContent: Partial<HeaderProps>;
	let logo: ImageProps;

	beforeEach(() => {
		logo = {
			url: 'logo_url',
			description: 'Logo Description',
		};

		headerContent = {
			logo: logo as ImageProps,
		};
	});

	describe('When logo is undefined', () => {
		it('Returns null', () => {
			// Arrange
			headerContent.logo = undefined;

			// Act
			const { container } = render(
				<Header {...(headerContent as HeaderProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When logo.url is undefined', () => {
		it('Returns null', () => {
			// Arrange
			headerContent.logo!.url = (undefined as unknown) as string;

			// Act
			const { container } = render(
				<Header {...(headerContent as HeaderProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When logo.description is undefined', () => {
		it('Returns null', () => {
			// Arrange
			headerContent.logo!.description = (undefined as unknown) as string;

			// Act
			const { container } = render(
				<Header {...(headerContent as HeaderProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When all content is defined', () => {
		it('Returns null', () => {
			// Act
			const { container } = render(
				<Header {...(headerContent as HeaderProps)} />
			);

			// Assert
			expect(container).toBeInTheDocument();
		});
	});
});
