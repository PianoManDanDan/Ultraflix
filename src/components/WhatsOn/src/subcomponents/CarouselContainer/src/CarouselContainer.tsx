import * as React from 'react';
import Slider from 'react-slick';
import { MovieSlide, MovieSlideProps } from '../../MovieSlide/src';
import { Image, ImageProps } from '../../../../../Image/src';
import './CarouselContainer.scss';
import { getMaxBreakpoint } from '.';

export type CarouselContainerProps = {
	movieList: MovieSlideProps[];
	leftChevron: ImageProps;
	rightChevron: ImageProps;
};

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
	movieList,
	leftChevron,
	rightChevron,
}) => {
	if (!leftChevron || !rightChevron) {
		return null;
	}

	const PrevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div className={className} style={style} onClick={onClick}>
				<Image {...leftChevron} />
			</div>
		);
	};

	const NextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div className={className} style={style} onClick={onClick}>
				<Image {...rightChevron} />
			</div>
		);
	};

	const responsiveSizes = [
		{
			breakpoint: getMaxBreakpoint('md'),
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: getMaxBreakpoint('sm'),
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: getMaxBreakpoint('xs'),
			settings: {
				slidesToShow: 1,
			},
		},
	];

	return (
		<div className="carousel-container">
			<Slider
				infinite
				speed={500}
				centerMode
				focusOnSelect
				slidesToShow={5}
				prevArrow={<PrevArrow />}
				nextArrow={<NextArrow />}
				responsive={responsiveSizes}
			>
				{movieList.map((movie) => {
					return (
						<div key={movie.title}>
							<MovieSlide {...movie} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
