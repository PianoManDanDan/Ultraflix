import * as React from 'react';
import { useState } from 'react';
import { ArrowProps, Arrow } from './Arrow';
import { MovieSlide } from '../../MovieSlide/src/MovieSlide';
import { MovieSlideProps } from '../../MovieSlide/src/types';

export type CarouselProps = {
	leftArrow?: ArrowProps;
	rightArrow?: ArrowProps;
	movieList: MovieSlideProps[];
	numberOfVisibleMovies?: number;
};

export const Carousel: React.FC<CarouselProps> = ({
	// leftArrow,
	// rightArrow,
	movieList,
}) => {
	const [selectedMovie, setSelectedMovie] = useState(0);

	const onLeftArrowClick = () => setSelectedMovie(selectedMovie - 1);
	const onRightArrowClick = () => setSelectedMovie(selectedMovie + 1);

	return (
		<div className="carousel">
			<div className="row">
				<div className="col-xs-1">{/* <Arrow {...leftArrow} /> */}</div>
				{movieList.map((movie, index) => {
					if (index === selectedMovie) {
						return <MovieSlide {...movie} />;
					}

					return null;
				})}
				<div className="col-xs-1">{/* <Arrow {...rightArrow} /> */}</div>
			</div>
		</div>
	);
};
