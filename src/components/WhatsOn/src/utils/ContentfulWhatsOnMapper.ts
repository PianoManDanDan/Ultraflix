import { HookResponse } from 'react-contentful';
import { WhatsOnProps } from '../types/WhatsOnProps';
import { contentfulImageMapper } from '../../../Image/src';
import { movieSlidePropsMapper } from '../subcomponents/MovieSlide/src';

export const contentfulWhatsOnMapper = (
	whatsOnContent: HookResponse
): WhatsOnProps | null => {
	try {
		if (!whatsOnContent.data) {
			throw new Error('No data in reponse');
		}
		if (!whatsOnContent.data['fields'].heading) {
			throw new Error('No heading in response');
		}
		if (!whatsOnContent.data['fields'].movies) {
			throw new Error('No movies in response');
		}
		if (
			!whatsOnContent.data['fields'].leftChevron ||
			!whatsOnContent.data['fields'].rightChevron
		) {
			throw new Error('No chevron in response');
		}
	} catch (err) {
		console.error(err);
		return null;
	}
	return {
		heading: whatsOnContent.data['fields'].heading,
		movieList: movieSlidePropsMapper(whatsOnContent.data['fields'].movies),
		leftChevron: contentfulImageMapper(
			whatsOnContent.data['fields'].leftChevron
		),
		rightChevron: contentfulImageMapper(
			whatsOnContent.data['fields'].rightChevron
		),
	};
};
