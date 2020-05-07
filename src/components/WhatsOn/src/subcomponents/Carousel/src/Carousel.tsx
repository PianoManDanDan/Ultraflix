import * as React from 'react';
import { useState } from 'react';
import { Arrow } from './Arrow';
import { MovieSlide } from '../../MovieSlide/src/MovieSlide';
import { MovieSlideProps } from '../../MovieSlide/src/types';
import { ImageProps } from '../../../../../Image/src';
import './Carousel.scss';

export type CarouselProps = {
	movieList: MovieSlideProps[];
};

const getIndex = (index, listLength) => {
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

	const onLeftArrowClick = () =>
		setSelectedMovie(getIndex(selectedMovie - 1, movieList.length));
	const onRightArrowClick = () =>
		setSelectedMovie(getIndex(selectedMovie + 1, movieList.length));

	// const leftChevron: ImageProps | null = useGetContentfulImage(
	// 	'3X7T8xFIMkjRTOtQi1bd91'
	// );
	// const rightChevron: ImageProps | null = useGetContentfulImage(
	// 	'tVJp67JuW5z12O8tsX84r'
	// );

	const leftChevron: ImageProps = {
		url: '',
		description: 'Movie Slide Image',
	};

	const rightChevron = leftChevron;

	if (!leftChevron || !rightChevron) {
		return null;
	}

	return (
		<div className="carousel">
			<div className="row">
				<div className="col col-xs-1">
					<button type="button" onClick={() => onLeftArrowClick()}>
						<Arrow
							arrowImage={leftChevron}
							arrowClick={() => onLeftArrowClick()}
						/>
					</button>
				</div>
				{movieList.map((movie, index) => {
					if (index === selectedMovie) {
						return (
							<div className="col col-xs-2">
								<MovieSlide {...movie} />
							</div>
						);
					}
					if (
						index === getIndex(selectedMovie - 2, movieList.length) ||
						index === getIndex(selectedMovie - 1, movieList.length) ||
						index === getIndex(selectedMovie + 1, movieList.length) ||
						index === getIndex(selectedMovie + 2, movieList.length)
					) {
						console.log('length');
						console.log(movieList.length);
						console.log('index');
						console.log(selectedMovie);
						console.log(getIndex(selectedMovie - 2, movieList.length));
						console.log(getIndex(selectedMovie - 1, movieList.length));
						console.log(getIndex(selectedMovie + 1, movieList.length));
						console.log(getIndex(selectedMovie + 2, movieList.length));
						return (
							<div className="col col-xs-2">
								<div className="unselected-movie">
									<MovieSlide {...movie} />
								</div>
							</div>
						);
					}
					return null;
				})}
				<div className="col col-xs-1">
					<Arrow
						arrowImage={rightChevron}
						arrowClick={() => onRightArrowClick()}
					/>
				</div>
			</div>
		</div>
	);
};
