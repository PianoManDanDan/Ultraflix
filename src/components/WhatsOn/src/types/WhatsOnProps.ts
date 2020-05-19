import { MovieSlideProps } from '../subcomponents/MovieSlide/src';
import { ImageProps } from '../../../Image/src';

export type WhatsOnProps = {
	heading: string;
	movieList: MovieSlideProps[];
	leftChevron: ImageProps;
	rightChevron: ImageProps;
};
