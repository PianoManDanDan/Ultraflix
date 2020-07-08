import { contentfulImageMapper } from '../../../Image/src';
import { WhatsOnProps } from '../types';
import { Movie } from '../../../../shared/types';

export const whatsOnContentMapper = (
	whatsOnContent,
	movieList: Movie[]
): WhatsOnProps => ({
	heading: whatsOnContent['fields'].heading,
	movieList,
	prevArrow: contentfulImageMapper(whatsOnContent['fields'].prevArrow),
	nextArrow: contentfulImageMapper(whatsOnContent['fields'].nextArrow),
});
