import { contentfulImageMapper } from '../../../Image/src';
import { WhatsOnProps } from '../types';

export const whatsOnContentMapper = (
	whatsOnContent,
	movieList
): WhatsOnProps => ({
	heading: whatsOnContent['fields'].heading,
	movieList,
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
