import { ImageProps } from '../components/Image/src/types';

export type Movie = {
	posterImage: ImageProps;
	title: string;
	runtime: string;
	certificate: string;
	releaseYear: number;
};
