import { WhatsOnContenfulReponse } from '..';
import { contentfulImageMapper } from '../../../Image/src';
import { contentfulMoviesMapper } from '../../../../utils';

export const contentfulWhatsOnMapper = (
	whatsOnContent: object
): WhatsOnContenfulReponse => ({
	heading: whatsOnContent['fields'].heading,
	movieList: contentfulMoviesMapper(whatsOnContent['fields'].items),
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
