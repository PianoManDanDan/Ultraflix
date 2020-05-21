import React from 'react';
import Slider from 'react-slick';
import { WhatsOnProps, getMaxBreakpoint } from '.';
import { MovieSlide } from './subcomponents/MovieSlide/src';
import { Arrow } from './subcomponents/Arrow';
import './WhatsOn.scss';

export const WhatsOn: React.FC<WhatsOnProps> = ({
	heading,
	movieList,
	prevArrow,
	nextArrow,
}) => {
	if (
		!heading ||
		!movieList ||
		movieList.length === 0 ||
		!leftChevron ||
		!rightChevron
	) {
		return null;
	}

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
			<div className="whats-on__header">{heading}</div>
			<Slider
				className="whats-on__carousel"
				infinite
				speed={500}
				centerMode
				focusOnSelect
				centerPadding="0"
				slidesToShow={5}
				prevArrow={<Arrow arrow={prevArrow} />}
				nextArrow={<Arrow arrow={nextArrow} />}
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
