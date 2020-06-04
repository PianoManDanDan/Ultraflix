import React from 'react';
import Rater from 'react-rater';
import { Image } from '../../Image/src';
import { Movie } from '../../../types';
import './MovieDetails.scss';
import { ratingRoundHalf } from './utils';

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
		<div className="movie-details app-content-container">
			<div className="row">
				<div className="col-xs-12 col-md-2">
					<Image className="movie-details__image" {...posterImage} />
				</div>
				<div className="col-xs-12 col-md-10">
					<h2 className="movie-details__title">
						{title} ({releaseYear})
					</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-2">
					<Rater
						total={5}
						rating={ratingRoundHalf(rating)}
						interactive={false}
					/>
					<p className="movie-details__certificate">{certificate}</p>
					<p className="movie-details__runtime">{runtime}</p>
				</div>
				<div className="col-xs-12 col-md-10">
					<p className="movie-details__description">{description}</p>
				</div>
			</div>
		</div>
	);
};
