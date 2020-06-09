import { WhatsOnContenfulReponse } from '..';
import { contentfulImageMapper } from '../../../Image/src';
import { contentfulMovieIdsMapper } from '../subcomponents/MovieSlide/src';

export const contentfulWhatsOnMapper = (
	whatsOnContent: object
): WhatsOnContenfulReponse => ({
	heading: whatsOnContent['fields'].heading,
	movieIds: contentfulMovieIdsMapper(whatsOnContent['fields'].items),
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
