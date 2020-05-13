import * as React from 'react';
import { useState } from 'react';
import { MovieSlide, MovieSlideProps } from '../../MovieSlide/src';
import { ImageProps } from '../../../../../Image/src';
import sizes from '../../../../../../globalStyles/_sizes.scss';
import Carousel from 'react-multi-carousel';
import './CarouselContainer.scss';

export type CarouselContainerProps = {
	movieList: MovieSlideProps[];
};

export const CarouselContainer: React.FC<CarouselContainerProps> = ({ movieList }) => {
	const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
	const numberOfMoviesToShow = 5;

	// const leftChevron: ImageProps | null = useGetContentfulImage(
	// 	'3X7T8xFIMkjRTOtQi1bd91'
	// );
	// const rightChevron: ImageProps | null = useGetContentfulImage(
	// 	'tVJp67JuW5z12O8tsX84r'
	// );

	const leftChevron: ImageProps = {
		url: '/left-chevron.svg',
		description: 'Movie Slide Image',
	};

	const rightChevron: ImageProps = {
		url: '/right-chevron.svg',
		description: 'Movie Slide Image',
	};

	if (!leftChevron || !rightChevron) {
		return null;
	}

	const responsiveSizes = {
		large: {
			breakpoint: { min: 1400, max: 1920 },
			items: 5
		},
		medium: {
			breakpoint: { min: 1000, max: 1399 },
			items: 5
		},
		small: {
			breakpoint: { min: 670, max: 999 },
			items: 2
		},
		xsmall: {
			breakpoint: { min: 320, max: 669 },
			items: 1
		}
	};

	return (
		<div className="carousel-container">
			<Carousel
				showDots={true}
				responsive={responsiveSizes}
				infinite={true}
				keyBoardControl={true}
			>
				{movieList.map((movie) => {
					return (
						<MovieSlide {...movie} />);
				})}
			</Carousel>
		</div>
	);
};
