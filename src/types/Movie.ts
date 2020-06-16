import { ImageProps } from '../components/Image/src/types';
import { ContentfulMovie } from '../types';

export type Movie = ContentfulMovie & {
	posterImage: ImageProps;
	title: string;
	runtime: string;
	releaseYear: number;
	description: string;
	rating: number;
};
