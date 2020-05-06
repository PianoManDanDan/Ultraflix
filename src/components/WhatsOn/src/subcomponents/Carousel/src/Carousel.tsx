import * as React from 'react';
import { useState } from 'react';
import { Arrow } from './Arrow';
import { MovieSlide } from '../../MovieSlide/src/MovieSlide';
import { MovieSlideProps } from '../../MovieSlide/src/types';
import { ImageProps, useGetContentfulImage } from '../../../../../Image/src';
import './Carousel.scss';

export type CarouselProps = {
	movieList: MovieSlideProps[];
};

export const Carousel: React.FC<CarouselProps> = ({ movieList }) => {
	const [selectedMovie, setSelectedMovie] = useState(0);

	const onLeftArrowClick = () =>
		setSelectedMovie((selectedMovie - 1) % movieList.length);
	const onRightArrowClick = () =>
		setSelectedMovie((selectedMovie + 1) % movieList.length);

	const leftChevron: ImageProps | null = useGetContentfulImage(
		'3X7T8xFIMkjRTOtQi1bd91'
	);
	const rightChevron: ImageProps | null = useGetContentfulImage(
		'tVJp67JuW5z12O8tsX84r'
	);

	if (!leftChevron || !rightChevron) {
		return null;
	}

	return (
		<div className="carousel">
			<div className="row">
				<div className="col-xs-1">
					<Arrow
						arrowImage={leftChevron}
						arrowClick={() => onLeftArrowClick()}
					/>
				</div>
				{movieList.map((movie, index) => {
					if (index === selectedMovie) {
						return (
							<div className="col-xs-2">
								<MovieSlide {...movie} />
							</div>
						);
					}
					if (index >= selectedMovie - 2 || index <= selectedMovie + 2) {
						return (
							<div className="col-xs-2">
								<div className="unselected-movie">
									<MovieSlide {...movie} />
								</div>
							</div>
						);
					}
					return null;
				})}
				<div className="col-xs-1">
					<Arrow
						arrowImage={rightChevron}
						arrowClick={() => onRightArrowClick()}
					/>
				</div>
			</div>
		</div>
	);
};
