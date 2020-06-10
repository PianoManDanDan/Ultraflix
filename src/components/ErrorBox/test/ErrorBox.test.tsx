import React from 'react';
import { render } from '@testing-library/react';
import { ErrorBox, ErrorBoxProps } from '../src';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorBox Component', () => {
	let errorBoxContent: Partial<ErrorBoxProps>;

	beforeEach(() => {
		errorBoxContent = {
			errorCode: 404,
			heading: 'Oops something went wrong',
			message: 'This page does not exist.',
		};
	});

	describe('When errorCode is undefined', () => {
		it('Renders component without errorCode', () => {
			// Arrange
			errorBoxContent.errorCode = undefined;

			// Act
			const { container } = render(
				<ErrorBox {...(errorBoxContent as ErrorBoxProps)} />
			);

			// Assert
			expect(container).not.toHaveTextContent(`${errorBoxContent.errorCode!}`);
			expect(container).toHaveTextContent(errorBoxContent.heading!);
			expect(container).toHaveTextContent(errorBoxContent.message!);
		});
	});

	describe('When heading is undefined', () => {
		it('Returns null', () => {
			// Arrange
			errorBoxContent.heading = undefined;

			// Act
			const { container } = render(
				<ErrorBox {...(errorBoxContent as ErrorBoxProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});

	describe('When message is undefined', () => {
		it('Returns null', () => {
			// Arrange
			errorBoxContent.message = undefined;

			// Act
			const { container } = render(
				<ErrorBox {...(errorBoxContent as ErrorBoxProps)} />
			);

			// Assert
			expect(container).toBeEmpty();
		});
	});
});
