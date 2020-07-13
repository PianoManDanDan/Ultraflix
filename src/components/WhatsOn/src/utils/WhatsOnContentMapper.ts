import { contentfulImageMapper } from '../../../Image/src';
import { WhatsOnProps } from '../types';

export const whatsOnContentMapper = (
	whatsOnContent
): Omit<WhatsOnProps, 'movieList'> => ({
	heading: whatsOnContent['fields'].heading,
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
