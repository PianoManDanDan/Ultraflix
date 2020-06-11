import { ImageProps } from '../components/Image/src/types';

export type Movie = {
	contentfulID: string;
	posterImage: ImageProps;
	title: string;
	runtime?: string;
	certificate?: string;
	releaseYear?: number;
	description?: string;
	rating?: number;
};
