import React from 'react';
import Slider from 'react-slick';
import { getMaxBreakpoint, WhatsOnProps } from '.';
import { MovieSlide } from './subcomponents/MovieSlide/src';
import { Image } from '../../Image/src';
import './WhatsOn.scss';

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
			<div
				className={className}
				style={style}
				onClick={onClick}
				onKeyPress={onClick}
				role="button"
				tabIndex={0}
			>
				<Image {...leftChevron} />
			</div>
		);
	};

	const NextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={style}
				onClick={onClick}
				onKeyPress={onClick}
				role="button"
				tabIndex={0}
			>
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
