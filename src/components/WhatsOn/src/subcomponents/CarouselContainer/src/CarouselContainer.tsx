import * as React from 'react';
import Carousel from 'react-multi-carousel';
import { MovieSlide, MovieSlideProps } from '../../MovieSlide/src';
import { ImageProps } from '../../../../../Image/src';
import './CarouselContainer.scss';
import { getBreakpoints } from '.';

export type CarouselContainerProps = {
	movieList: MovieSlideProps[];
};

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
	movieList,
}) => {
	// const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
	// const numberOfMoviesToShow = 5;

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
			breakpoint: getBreakpoints('lg'),
			items: 5,
		},
		medium: {
			breakpoint: getBreakpoints('md'),
			items: 5,
		},
		small: {
			breakpoint: getBreakpoints('sm'),
			items: 2,
		},
		xsmall: {
			breakpoint: getBreakpoints('xs'),
			items: 1,
		},
	};

	return (
		<div className="carousel-container">
			<Carousel showDots responsive={responsiveSizes} infinite keyBoardControl>
				{movieList.map((movie) => {
					return (
						<div key={movie.title}>
							<MovieSlide {...movie} />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};
