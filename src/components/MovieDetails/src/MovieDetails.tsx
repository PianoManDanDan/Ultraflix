import React from 'react';
import Rater from 'react-rater';
import { Image } from '../../Image/src';
import { Movie } from '../../../types';
import './MovieDetails.scss';

export const MovieDetails: React.FC<Movie> = ({
	posterImage,
	title,
	runtime,
	certificate,
	releaseYear,
	description,
	rating,
}) => {
	return (
		<div>
			<Image className="movie-details-image" {...posterImage} />
			<h2 className="movie-details-title">
				{title} ({releaseYear})
			</h2>
			<Rater total={5} rating={rating} interactive={false} />
			<p className="movie-details-certificate">{certificate}</p>
			<p className="movie-details-runtime">{runtime}</p>

			<p className="movie-details-description">{description}</p>
		</div>
	);
};
