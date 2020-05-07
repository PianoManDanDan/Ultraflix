import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import { WhatsOn } from '../src';

describe('WhatsOn Component', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders the correct heading', () => {
		// Arrange
		const mockHeading = 'test Heading';
		jest.mock('react-contentful', () => ({
			useContentful: jest.fn(() => {
				return {
					fetched: true,
					loading: true,
					data: {
						fields: {
							heading: mockHeading,
							movies: null,
						},
					},
				};
			}),

			// .mockReturnValue({
			// 	fetched: true,
			// 	loading: true,
			// 	data: {
			// 		fields: {
			// 			heading: mockHeading,
			// 			movies: null,
			// 		},
			// 	},
			// }),
		}));

		// Act
		const { container } = render(<WhatsOn />);

		// Assert
		expect(container).toHaveTextContent(mockHeading);
	});
});
