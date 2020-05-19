import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import * as contentful from 'react-contentful';
import * as slider from 'react-slick';
import { WhatsOn, getMaxBreakpoint, WhatsOnProps } from '../src';
import { ImageProps } from '../../Image/src';
import { MovieSlideProps } from '../src/subcomponents/MovieSlide/src';

jest.mock('react-slick', () => ({
	slider: jest.fn().mockReturnValue(<div>Test</div>),
}));

// const mockSlider = jest.spyOn(slider, 'Slider' as never);
// mockSlider.mockImplementation(() => 'Slider'never);


describe('WhatsOn Component', () =>
	afterEach(() => {
		jest.resetAllMocks();
	});

it('renders the correct heading', () => {
	// Arrange
	const mockHeading = 'test Heading';
	const whatsOnContent: WhatsOnProps = {
		header: mockHeading,
		movieList: [
			{
				posterImage: {
					url: '',
					description: '',
				},
				title: '',
				runtime: '',
				certificate: '',
				releaseYear: 0,
			},
		],
		leftChevron: {
			url: '',
			description: '',
		},
		rightChevron: {
			url: '',
			description: '',
		}
	};

	// Act
	const { container } = render(<WhatsOn {...whatsOnContent} />);

	// Assert
	console.log(container);
	expect(container).toHaveTextContent(mockHeading);
	expect(container).toHaveTextContent('Slider'); // toHaveTextContent(mockHeading);
});

	// it('renders the Carousel component', () => {
	// 	// Arrange
	// 	const mockCarouselContent = 'Carousel Component';
	// 	mockUseContentful.mockReturnValue({
	// 		fetched: true,
	// 		loading: false,
	// 		data: {
	// 			fields: {
	// 				heading: '',
	// 				movies: [
	// 					{
	// 						fields: {
	// 							posterImage: {
	// 								fields: {
	// 									file: {
	// 										url: '',
	// 									},
	// 									description: '',
	// 								},
	// 							},
	// 							title: '',
	// 							runtime: '',
	// 							certificate: '',
	// 							releaseYear: 0,
	// 						},
	// 					},
	// 				],
	// 			},
	// 		},
	// 	});

	// 	// Act
	// 	const { container } = render(<WhatsOn {...whatsOnContent} />);

	// 	// Assert
	// 	expect(container).toHaveTextContent(mockCarouselContent);
	// });

	// it('Renders the slider component', () => {
	// 	//Arrange
	// 	const mockSlider = jest.spyOn(Slider, 'Slider');
	// 	mockSlider.mockReturnValue(<p />)


	// 	// Act
	// 	const { container } = render(
	// 		<Slider {...responsiveSizes}>
	// 			<div>Movie</div>
	// 			<div>Movie</div>
	// 			<div>Movie</div>
	// 		</Slider>
	// 	);

	// 	// Assert
	// 	expect(container).toBeInTheDocument();
	// });
});
