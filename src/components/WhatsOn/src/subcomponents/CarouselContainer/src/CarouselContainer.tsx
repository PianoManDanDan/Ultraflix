import * as React from 'react';
import { useState } from 'react';
import { MovieSlide, MovieSlideProps } from '../../MovieSlide/src';
import { ImageProps } from '../../../../../Image/src';
import Carousel from 'react-multi-carousel';
import './CarouselContainer.scss';


// var settings = {
// 	dots: false,
// 	infinite: true,
// 	speed: 1000,
// 	slidesToShow: 5,
// 	slidesToScroll: 1
// };



export type CarouselContainerProps = {
	movieList: MovieSlideProps[];
};

const getIndexInList = (index, listLength) => {
	if (index >= listLength) {
		return index - listLength;
	}
	if (index < 0) {
		return index + listLength;
	}
	return index;
};

const getDisplayedMovies = (
	selectedMovieIndex: number,
	numberOfMoviesToShow: number,
	movieList: MovieSlideProps[]
): MovieSlideProps[] => {
	const lowerIndex = -Math.floor(numberOfMoviesToShow / 2);
	const upperIndex = numberOfMoviesToShow + lowerIndex;
	const displayedMovies: MovieSlideProps[] = [];

	for (let i = lowerIndex; i < upperIndex; i++) {
		const movieIndex = getIndexInList(selectedMovieIndex + i, movieList.length);
		displayedMovies.push(movieList[movieIndex]);
	}

	return displayedMovies;
};

export const CarouselContainer: React.FC<CarouselContainerProps> = ({ movieList }) => {
	const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
	const numberOfMoviesToShow = 5;

	const incrementSelectedMovieIndex = (indexIncrement) => {
		setSelectedMovieIndex(
			getIndexInList(selectedMovieIndex + indexIncrement, movieList.length)
		);
	};

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
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<div className="carousel-container">
			{/* <div className="row">
				<div className="col col-xs-1">
					<button type="button" onClick={() => incrementSelectedMovieIndex(-1)}>
						<Image {...leftChevron} />
					</button>
				</div>
				{getDisplayedMovies(
					selectedMovieIndex,
					numberOfMoviesToShow,
					movieList
				).map((movie) => {
					if (movie === movieList[selectedMovieIndex]) {
						return (
							<div className="col col-xs-2">
								<div className="carousel__selected-movie">
									<MovieSlide {...movie} />
								</div>
							</div>
						);
					}
					return (
						<div key={movie.title} className="col col-xs-2">
							<div className="carousel__unselected-movie">
								<MovieSlide {...movie} />
							</div>
						</div>
					);
				})}
				<div className="col col-xs-1">
					<button type="button" onClick={() => incrementSelectedMovieIndex(1)}>
						<Image {...rightChevron} />
					</button>
				</div>
			</div> */}
			<Carousel responsive={responsiveSizes}>
				{movieList.map((movie) => {
					return (
						<div key={movie.title} className="col col-xs-2">
							<MovieSlide {...movie} />
						</div>);
				})}
			</Carousel>
		</div>
	);
};
