import React from 'react';
import Rater from 'react-rater';
import { Image } from '../../Image/src';
import { Movie } from '../../../shared/types';
import './MovieDetails.scss';
import { halveAndRound } from './utils';

export const MovieDetails: React.FC<Movie> = ({
	posterImage,
	title,
	runtime,
	certificate,
	releaseYear,
	description,
	rating,
}) => {
	if (!posterImage || !title) {
		return null;
	}
	return (
		<div className="app-content-container">
			<div className="movie-details">
				<div className="col-xs-12 col-md-2" id="movie-details__sidebar">
					<Image className="movie-details__image" {...posterImage} />
					<div className="movie-details__rating">
						{rating || rating === 0 ? (
							<Rater
								total={5}
								rating={halveAndRound(rating)}
								interactive={false}
							/>
						) : (
							<div className="movie-details__no-rating">No rating yet</div>
						)}

						<div className="movie-details__certificate-runtime">
							{certificate}&emsp;|&emsp;{runtime}
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-md-10">
					<div className="movie-details__title">
						{title} {releaseYear ? `(${releaseYear})` : ''}
					</div>
				</div>

				<div
					className="col-xs-12 col-md-10"
					id="movie-details__description-container"
				>
					<div className="movie-details__description">{description}</div>
				</div>
			</div>
		</div>
	);
};
