import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header, HeaderProps } from '../src';
import { ImageProps } from '../../Image/src';

describe('Header Component', () => {
	let headerContent: Partial<HeaderProps>;
	let logo: ImageProps;

	beforeEach(() => {
		headerContent = {
			logo,
		};
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
