import { ImageProps } from '../../components/Image/src/types';

export type Movie = {
	contentfulId: string;
	imdbId: string;
	certificate: string;
	posterImage: ImageProps;
	title: string;
	runtime: string;
	releaseYear: number;
	description: string;
	rating: number;
};
