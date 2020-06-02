import { Movie } from '../../../../types';
import { ImageProps } from '../../../Image/src';

export type WhatsOnProps = {
	heading: string;
	movieList: Movie[];
	prevArrow: ImageProps;
	nextArrow: ImageProps;
};
