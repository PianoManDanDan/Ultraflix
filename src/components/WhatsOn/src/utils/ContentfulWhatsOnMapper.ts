import { WhatsOnProps } from '../WhatsOn';
import { contentfulImageMapper } from '../../../Image/src';
import { movieSlidePropsMapper } from '../subcomponents/MovieSlide/src';

export const contentfulWhatsOnMapper = (whatsOnContent: any): WhatsOnProps => {
	return {
		header: whatsOnContent.data['fields'].heading,
		movieList: movieSlidePropsMapper(whatsOnContent.data['fields'].movies),
		leftChevron: contentfulImageMapper(
			whatsOnContent.data['fields'].leftChevron
		),
		rightChevron: contentfulImageMapper(
			whatsOnContent.data['fields'].rightChevron
		),
	};
};
