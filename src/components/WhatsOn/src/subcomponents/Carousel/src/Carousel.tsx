import * as React from 'react';
import { useState } from 'react';
import { MovieSlide, MovieSlideProps } from '../../MovieSlide/src';
import { Image, ImageProps } from '../../../../../Image/src';
import './Carousel.scss';

export type CarouselProps = {
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

export const Carousel: React.FC<CarouselProps> = ({ movieList }) => {
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

	return (
		<div className="carousel container">
			<div className="row">
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
			</div>
		</div>
	);
};
