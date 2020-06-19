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
				<div className="row">
					<div className="col-xs-12 col-md-2">
						<Image className="movie-details__image" {...posterImage} />
					</div>
					<div className="col-xs-12 col-md-10">
						<span className="movie-details__title">
							{title} {releaseYear ? `(${releaseYear})` : ''}
						</span>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-2">
						{rating || rating === 0 ? (
							<Rater
								total={5}
								rating={halveAndRound(rating)}
								interactive={false}
							/>
						) : (
							''
						)}

						<div className="movie-details__certificate">{certificate}</div>
						<div className="movie-details__runtime">{runtime}</div>
					</div>
					<div className="col-xs-12 col-md-10">
						<div className="movie-details__description">{description}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
