import React from 'react';
import Slider from 'react-slick';
import { WhatsOnProps, getMaxBreakpoint } from '.';
import { MovieSlide } from './subcomponents/MovieSlide/src';
import { Arrow } from './subcomponents/Arrow';
import './WhatsOn.scss';
import { enableTabbing, disableTabbing } from './utils';

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
		!prevArrow ||
		!nextArrow
	) {
		return null;
	}

	const responsiveSizes = [
		{
			breakpoint: getMaxBreakpoint('md'),
			settings: {
				slidesToShow: 5,
				centerPadding: '0',
			},
		},
		{
			breakpoint: getMaxBreakpoint('sm'),
			settings: {
				slidesToShow: 3,
				centerPadding: '70px',
			},
		},
		{
			breakpoint: getMaxBreakpoint('xs'),
			settings: {
				slidesToShow: 1,
				centerPadding: '100px',
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
				onReInit={() => {
					enableTabbing();
				}}
				beforeChange={(oldSlideIndex) => {
					disableTabbing(oldSlideIndex);
				}}
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
