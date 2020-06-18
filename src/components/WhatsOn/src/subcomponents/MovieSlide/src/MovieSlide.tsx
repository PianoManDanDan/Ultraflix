import * as React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../../../../../types';
import { Image } from '../../../../../Image/src';
import './MovieSlide.scss';

export const MovieSlide: React.FC<Movie> = ({
	contentfulId,
	posterImage,
	title,
	runtime,
	certificate,
	releaseYear,
}) => {
	if (!posterImage || !title || !runtime || !certificate || !releaseYear) {
		return null;
	}

	return (
		<div className="movie-slide container">
			<Link to={`/movies/${contentfulId}`}>
				<Image {...posterImage} />
				<div className="movie-slide__info">
					<div className="movie-slide__title">{title}</div>
					<div>
						<span className="movie-slide__runtime">{runtime}</span>
						<span className="movie-slide__certificate">{certificate}</span>
					</div>
					<div className="movie-slide__release-year">{releaseYear}</div>
				</div>
			</Link>
		</div>
	);
};
