import { WhatsOnProps } from '..';
import { contentfulImageMapper } from '../../../Image/src';
import { contentfulMovieListMapper } from '../subcomponents/MovieSlide/src';

export const contentfulWhatsOnMapper = (
	whatsOnContent: object
): WhatsOnProps => ({
	heading: whatsOnContent['fields'].heading,
	movieList: contentfulMovieListMapper(whatsOnContent['fields'].items),
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
