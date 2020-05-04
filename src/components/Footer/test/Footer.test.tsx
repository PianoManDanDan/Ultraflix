import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '../src';
import { FooterProps } from '../src/types';
import { ImageProps } from '../../Image/src/types';

describe('Footer Component', () => {
	let footerContent: Partial<FooterProps>;
	let logo: ImageProps;

	beforeEach(() => {
		footerContent = {
			copyrightText: 'Test copyright text',
			logo,
			companyText: 'Test company text',
		};
	});

	describe('When copyrightText is undefined', () => {
		it('Renders component without copyrightText', () => {
			// Arrange
			footerContent.copyrightText = undefined;

			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).not.toHaveTextContent(footerContent.copyrightText!);
			expect(container).toHaveTextContent(footerContent.companyText!);
		});
	});

	describe('When companyText is undefined', () => {
		it('Renders component without companyText', () => {
			// Arrange
			footerContent.companyText = undefined;

			// Act
			const { container } = render(
				<Footer {...(footerContent as FooterProps)} />
			);

			// Assert
			expect(container).toHaveTextContent(footerContent.copyrightText!);
			expect(container).not.toHaveTextContent(footerContent.companyText!);
		});
	});

	describe('When all content is defined', () => {
		it('Renders component with all content', () => {
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
