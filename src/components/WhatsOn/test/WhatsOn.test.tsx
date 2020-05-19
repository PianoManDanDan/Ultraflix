import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import { WhatsOn, getMaxBreakpoint, WhatsOnProps } from '../src';

const mockSlider = jest.fn(() => <div />);

jest.mock('react-slick', () => ({
	__esModule: true,
	default: () => mockSlider(),
}));

jest.mock('../src', () => ({
	getMaxBreakpoint: (): number => 0,
}));

describe('WhatsOn Component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it('renders the correct heading', () => {
		// Arrange
		const mockHeading = 'test Heading';
		const whatsOnContent: WhatsOnProps = {
			heading: mockHeading,
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
			},
		};

		// Act
		const { container } = render(<WhatsOn {...whatsOnContent} />);

		// Assert
		expect(container).toHaveTextContent(mockHeading);
		expect(mockSlider).toHaveBeenCalledTimes(1); // toHaveTextContent(mockHeading);
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
