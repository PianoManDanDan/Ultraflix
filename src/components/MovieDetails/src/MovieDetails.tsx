import React from 'react';
import Rater from 'react-rater';
import { Image } from '../../Image/src';
import './MovieDetails.scss';

export const MovieDetails: React.FC<MovieProps> = ({
	posterImage,
	title,
	rating,
	runtime,
}) => {
	return (
		<div>
			<Image {...posterImage} />
			<h2 className="movie-title">{title}</h2>
			<Rater total={5} rating={rating} interactive={false} />
			<p className="runtime">{runtime}</p>

			{/* <MovieDetails /> */}
		</div>
	);
};
