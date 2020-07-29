import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import { MovieDetails } from '../src';
import { Movie } from '../../../shared/types';

const mockRater = jest.fn(() => <div />);

jest.mock('react-rater', () => ({
	__esModule: true,
	default: (): JSX.Element => mockRater(),
}));

const mockImage = jest.fn(() => <div />);

jest.mock('../../Image/src', () => ({
	Image: (): JSX.Element => mockImage(),
}));

jest.mock('../src/utils', () => ({
	halveAndRound: (): number => 0,
}));

describe('MovieDetails Component', () => {
	const movieDetailsRequiredKeys = ['posterImage', 'title'];
	const movieDetailsOptionalKeys = [
		'runtime',
		'certificate',
		'releaseYear',
		'description',
		'rating',
	];
	let movieDetailsContent: Partial<Movie>;

	beforeEach(() => {
		movieDetailsContent = {
			posterImage: {
				url: '',
				description: '',
			},
			title: 'movie title',
			runtime: '1 HR',
			certificate: '15',
			releaseYear: 2020,
			description: 'movie description',
			rating: 5,
		};
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('When all content is defined', () => {
		it('renders the component with all content displayed', () => {
			// Act
			const { container } = render(
				<MovieDetails {...(movieDetailsContent as Movie)} />
			);

			expect(container).toHaveTextContent(movieDetailsContent.title!);
			expect(container).toHaveTextContent(movieDetailsContent.runtime!);
			expect(container).toHaveTextContent(movieDetailsContent.certificate!);
			expect(container).toHaveTextContent(
				movieDetailsContent.releaseYear!.toString()
			);
			expect(container).toHaveTextContent(movieDetailsContent.description!);
			expect(mockRater).toHaveBeenCalledTimes(1);
			expect(mockImage).toHaveBeenCalledTimes(1);
		});
	});

	describe('When the optional Movie parameters are undefined', () => {
		describe.each(movieDetailsOptionalKeys)('When %s is undefined', (key) => {
			it(`renders the component without the ${key}`, () => {
				// Arrange
				const originalContent = movieDetailsContent[key].toString();
				movieDetailsContent[key] = undefined;

				// Act
				const { container } = render(
					<MovieDetails {...(movieDetailsContent as Movie)} />
				);

				// Assert
				if (key === 'rating') {
					expect(mockRater).not.toHaveBeenCalled();
				} else {
					expect(container).not.toHaveTextContent(originalContent);
				}
			});
		});
	});

	describe('When the compulsory Movie parameters are undefined', () => {
		describe.each(movieDetailsRequiredKeys)(`When %s is undefined`, (key) => {
			it('Returns null', () => {
				// Arrange
				movieDetailsContent[key] = undefined;

				// Act
				const { container } = render(
					<MovieDetails {...(movieDetailsContent as Movie)} />
				);

				// Assert
				expect(container.innerHTML).toBeEmpty();
			});
		});
	});
});
