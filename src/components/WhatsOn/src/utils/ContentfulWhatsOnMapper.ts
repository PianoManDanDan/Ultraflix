import { WhatsOnProps } from '..';
import { contentfulImageMapper } from '../../../Image/src';
import { contentfulMovieListMapper, contentfulMovieIDMapper } from '../subcomponents/MovieSlide/src';

export const contentfulWhatsOnMapper = (
	whatsOnContent: object
): WhatsOnProps => ({
	heading: whatsOnContent['fields'].heading,
	movieList: contentfulMovieIDMapper(whatsOnContent['fields'].items),
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
