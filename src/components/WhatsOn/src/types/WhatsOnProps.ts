import { Movie } from '../../../../types/Movie';
import { ImageProps } from '../../../Image/src';

export type WhatsOnProps = {
	heading: string;
	movieList: Movie[];
	prevArrow: ImageProps;
	nextArrow: ImageProps;
};
