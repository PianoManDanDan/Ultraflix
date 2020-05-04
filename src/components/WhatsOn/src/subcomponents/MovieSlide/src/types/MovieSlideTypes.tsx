import { ImageProps } from '../../../../../../Image/src/types';

export type MovieSlideProps = {
	image: ImageProps;
	title: string;
	runtime: string;
	ageRating: MovieRating;
	releaseYear: string;
};

export type MovieRating = 'PG' | '12A' | '18';
