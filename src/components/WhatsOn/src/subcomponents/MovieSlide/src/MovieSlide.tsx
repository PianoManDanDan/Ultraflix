import * as React from 'react';
import { MovieSlideProps } from './types';
import { Image } from '../../../../../Image/src';

export const MovieSlide: React.FC<MovieSlideProps> = ({
	image,
	title,
	runtime,
	ageRating,
	releaseYear,
}) => {
	return (
		<div className="movie-slide">
			<div className="app-content-container">
				<Image {...image} />
				<div className="movie-slide__info">
					<div className="movie-slide__title">{title}</div>
					<div>
						<span className="movie-slide__runtime">{runtime}</span>
						<span className="movie-slide__age-rating">{ageRating}</span>
						<span className="movie-slide__release-year">{releaseYear}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
