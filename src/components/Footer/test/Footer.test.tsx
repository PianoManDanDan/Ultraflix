import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer, FooterProps } from '../src';
import { ContentfulImage } from '../../../types';

describe('Footer Component', () => {
	let footerContent: Partial<FooterProps>;
	let logo: Partial<ContentfulImage>;

	beforeEach(() => {
		logo = {
			url: 'logo_url',
			description: 'Logo Description',
		};

		footerContent = {
			copyrightText: 'Test copyright text',
			logo: logo as ContentfulImage,
			companyText: 'Test company text',
		};
	});

	describe('When copyrightText is undefined', () => {
		it('Returns null', () => {
			// Arrange
			footerContent.copyrightText = undefined;

			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When logo is undefined', () => {
		it('Returns null', () => {
			// Arrange
			footerContent.logo = undefined;

			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When logo.url is undefined', () => {
		it('Returns null', () => {
			// Arrange
			logo.url = undefined;
			footerContent.logo = logo as ContentfulImage;

			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When logo.description is undefined', () => {
		it('Returns null', () => {
			// Arrange
			logo.description = undefined;
			footerContent.logo = logo as ContentfulImage;

			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When companyText is undefined', () => {
		it('Returns null', () => {
			// Arrange
			footerContent.companyText = undefined;

			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When all content is defined', () => {
		it('Returns null', () => {
			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).toHaveTextContent(footerContent.copyrightText!);
			expect(container).toHaveTextContent(footerContent.companyText!);
		});
	});
});
