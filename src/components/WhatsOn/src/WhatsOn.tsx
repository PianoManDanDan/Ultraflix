import React from 'react';
import Slider from 'react-slick';
import { getMaxBreakpoint } from '.';
import { MovieSlide, MovieSlideProps } from './subcomponents/MovieSlide/src';
import { Image, ImageProps } from '../../Image/src';
import './WhatsOn.scss';

export type WhatsOnProps = {
	header: string;
	movieList: MovieSlideProps[];
	leftChevron: ImageProps;
	rightChevron: ImageProps;
};

export const WhatsOn: React.FC<WhatsOnProps> = ({
	header,
	movieList,
	leftChevron,
	rightChevron,
}) => {
	if (!header || !movieList || !leftChevron || !rightChevron) {
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
		<div className="whats-on">
			<div className="whats-on__header">{header}</div>
			<Slider
				className="whats-on__carousel"
				infinite
				speed={500}
				centerMode
				focusOnSelect
				centerPadding="0"
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
