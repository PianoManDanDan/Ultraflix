import * as React from 'react';
import { useState } from 'react';
import { Arrow } from '.';
import { MovieSlide, MovieSlideProps } from '../../MovieSlide/src';
import { ImageProps } from '../../../../../Image/src';
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

export const Carousel: React.FC<CarouselProps> = ({ movieList }) => {
	const [selectedMovie, setSelectedMovie] = useState(0);

	const incrementIndex = (indexIncrement) => {
		const newIndex = getIndexInList(
			selectedMovie + indexIncrement,
			movieList.length
		);
		setSelectedMovie(newIndex);
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

	const getDisplayedMovies = (): MovieSlideProps[] => {
		return [
			movieList[getIndexInList(selectedMovie - 2, movieList.length)],
			movieList[getIndexInList(selectedMovie - 1, movieList.length)],
			movieList[getIndexInList(selectedMovie, movieList.length)],
			movieList[getIndexInList(selectedMovie + 1, movieList.length)],
			movieList[getIndexInList(selectedMovie + 2, movieList.length)],
		];
	};

	return (
		<div className="carousel">
			<div className="row">
				<div className="col col-xs-1">
					<button type="button" onClick={() => incrementIndex(-1)}>
						<Arrow arrowImage={leftChevron} />
					</button>
				</div>
				{getDisplayedMovies().map((movie) => {
					if (movie === movieList[selectedMovie]) {
						return (
							<div className="col col-xs-2">
								<MovieSlide {...movie} />
							</div>
						);
					}
					return (
						<div key={movie.title} className="col col-xs-2">
							<div className="unselected-movie">
								<MovieSlide {...movie} />
							</div>
						</div>
					);
				})}
				<div className="col col-xs-1">
					<button type="button" onClick={() => incrementIndex(1)}>
						<Arrow arrowImage={rightChevron} />
					</button>
				</div>
			</div>
		</div>
	);
};
