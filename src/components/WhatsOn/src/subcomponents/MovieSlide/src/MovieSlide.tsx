import * as React from 'react';
import { Movie } from '../../../../../../types';
import { Image } from '../../../../../Image/src';
import './MovieSlide.scss';
import { useEffect } from 'react';

export const MovieSlide: React.FC<Movie> = ({
	posterImage,
	title,
	runtime,
	certificate,
	releaseYear,
}) => {

	if (!posterImage || !title || !runtime || !certificate || !releaseYear) {
		//return null;
	}

	useEffect(() => {
		title;
	});

	return (
		<div className="movie-slide container">
			<Image {...posterImage} />
			<div className="movie-slide__info">
				<div className="movie-slide__title">{title}</div>
				<div>
					<span className="movie-slide__runtime">{runtime}</span>
					<span className="movie-slide__certificate">{certificate}</span>
				</div>
				<div className="movie-slide__release-year">{releaseYear}</div>
			</div>
		</div>
	);
};
