import * as React from 'react';
import { ArrowProps, Arrow } from './Arrow';
import { useState } from 'react';
import { MovieSlide } from '../../../../WhatsOn/src/subcomponents/MovieSlide/src/MovieSlide';
import { MovieSlideProps } from '../MovieSlide/src/types';


export type CarouselProps = {
	leftArrow: ArrowProps,
	rightArrow: ArrowProps,
	movieSlideList: MovieSlideProps[],
	numberOfVisibleMovies: number
};

const initialState = [this.movieList.length];
const [activeIndicies, setActiveIndicies] = useState(initialState);

function onLeftArrowClick() {
	activeIndicies.every((value) => value-- % this.movieList.length);
}

function onRightArrowClick() {
	activeIndicies.every((value) => value++ % this.movieList.length);
}

export const Carousel: React.FC<CarouselProps> = ({
	leftArrow,
	rightArrow,
	movieSlideList
}) => (
		<div className="carousel">
			<div className="row">
				<div className='col-xs-1'>
					<Arrow{...leftArrow} />
				</div>
				<div className='col-xs-3'>
					movieList[activeIndex]
				</div>
				<div className='col-xs-1'>
					<Arrow{...rightArrow} />
				</div>
			</div>
		</div>
	); 