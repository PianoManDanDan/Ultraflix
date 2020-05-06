import * as React from 'react';
import { useState } from 'react';
import { ArrowProps, Arrow } from './Arrow';
import { MovieSlide } from '../../MovieSlide/src/MovieSlide';
import { MovieSlideProps } from '../../MovieSlide/src/types';
import './Carousel.scss';
import { getLeftChevron, getRightChevron } from '../utils/getChevrons';
import { ImageProps } from '../../../../../Image/src/types';

export type CarouselProps = {
	movieList: MovieSlideProps[];
};

export const Carousel: React.FC<CarouselProps> = ({
	movieList,
}) => {
	const [selectedMovie, setSelectedMovie] = useState(0);

	const onLeftArrowClick = () => setSelectedMovie((selectedMovie - 1) % movieList.length);
	const onRightArrowClick = () => setSelectedMovie((selectedMovie + 1) % movieList.length);

	return (
		<div className="carousel">
			<div className="row">
				<div className="col-xs-1"><Arrow {...getLeftChevron(), onLeftArrowClick()} /></div>
				{movieList.map((movie, index) => {
					if (index === selectedMovie) {
						return <div className="col-xs-2">
							<MovieSlide {...movie} />
						</div>;
					}
					else if (index >= selectedMovie - 2 || index <= selectedMovie + 2) {
						return <div className="col-xs-2">
							<div className='unselected-movie'>
								<MovieSlide {...movie} />
							</div>
						</div>;
					}
					return null;
				})}
				<div className="col-xs-1"><Arrow {...getRightChevron(), onRightArrowClick()} /></div>
			</div>
		</div>
	);
};
