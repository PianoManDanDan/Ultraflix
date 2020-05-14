import * as React from 'react';
import Slider from 'react-slick';
import { MovieSlide, MovieSlideProps } from '../../MovieSlide/src';
import {
	Image,
	ImageProps,
	useGetContentfulImage,
} from '../../../../../Image/src';
import './CarouselContainer.scss';
import { getMaxBreakpoint } from '.';

export type CarouselContainerProps = {
	movieList: MovieSlideProps[];
};

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
	movieList,
}) => {
	// const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
	// const numberOfMoviesToShow = 5;

	const leftChevron: ImageProps | null = useGetContentfulImage(
		'3X7T8xFIMkjRTOtQi1bd91'
	);
	const rightChevron: ImageProps | null = useGetContentfulImage(
		'tVJp67JuW5z12O8tsX84r'
	);

	// const leftChevron: ImageProps = {
	// 	url: '/left-chevron.svg',
	// 	description: 'Movie Slide Image',
	// };

	// const rightChevron: ImageProps = {
	// 	url: '/right-chevron.svg',
	// 	description: 'Movie Slide Image',
	// };

	// if (!leftChevron || !rightChevron) {
	// 	return null;
	// }

	const PrevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div className={className} style={{ style }} onClick={onClick}>
				<Image {...leftChevron} />
			</div>
		);
	};

	const NextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div className={className} style={{ style }} onClick={onClick}>
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
