import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from '../src';
import { HeaderProps } from '../src/types';
import { ImageProps } from '../../Image/src/types';

describe('Header Component', () => {
	let headerContent: Partial<HeaderProps>;
	let logo: ImageProps;

	beforeEach(() => {
		headerContent = {
			logo,
		};
	});

	describe('When all content is defined', () => {
		it('Renders component', () => {
			// Act
			const { container } = render(
				<Header {...(headerContent as HeaderProps)} />
			);

			// Assert
			expect(container).toBeInTheDocument();
		});
	});
});
