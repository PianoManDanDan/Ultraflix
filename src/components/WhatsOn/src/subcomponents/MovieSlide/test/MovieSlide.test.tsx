import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MovieSlide } from '../src';
import { MovieSlideProps } from '../src/types';

const test = ['posterImage', 'title', 'runtime', 'certificate', 'releaseYear'];

describe('MovieSlide Component', () => {
	let movieSlideContent: Partial<MovieSlideProps>;

	beforeEach(() => {
		movieSlideContent = {
			posterImage: {
				url: '/movie_slide_image.jpg',
				description: 'Movie Slide Image',
			},
			title: 'Test',
			runtime: '1 HR 0 MIN',
			certificate: 'PG',
			releaseYear: 2020,
		};
	});

	test.forEach((key) => {
		describe(`When ${key} is undefined`, () => {
			it('Returns null', () => {
				// Arrange
				movieSlideContent[key] = undefined;

				// Act
				const { container } = render(
					<MovieSlide {...(movieSlideContent as MovieSlideProps)} />
				);

				// Assert
				expect(container).toBeEmpty();
			});
		});
	});

	describe('When all content is defined', () => {
		it('Renders component with all content', () => {
			// Act
			const { container } = render(
				<MovieSlide {...(movieSlideContent as MovieSlideProps)} />
			);

			// Assert
			expect(container).toHaveTextContent(movieSlideContent.title!);
			expect(container).toHaveTextContent(movieSlideContent.runtime!);
			expect(container).toHaveTextContent(movieSlideContent.certificate!);
		});
	});
});
