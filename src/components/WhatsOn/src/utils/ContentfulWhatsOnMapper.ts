import { WhatsOnContenfulReponse } from '..';
import { contentfulImageMapper } from '../../../Image/src';
import { contentfulMovieListMapper } from '../../../../shared/utils';

export const contentfulWhatsOnMapper = (
	whatsOnContent: object
): WhatsOnContenfulReponse => ({
	heading: whatsOnContent['fields'].heading,
	movieList: contentfulMovieListMapper(whatsOnContent['fields'].items),
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
