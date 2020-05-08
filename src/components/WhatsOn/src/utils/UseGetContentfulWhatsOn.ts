import { HookResponse, useContentful } from 'react-contentful';
import { movieSlidePropsMapper } from './MovieSlidePropsMapper';
import { WhatsOnContentful } from '../types';

export const useGetContentfulWhatsOn = (
	contentfulID: string
): WhatsOnContentful | null => {
	const contentfulFilmContent: HookResponse = useContentful({
		id: contentfulID,
	});

	if (
		contentfulFilmContent.loading ||
		!contentfulFilmContent.fetched ||
		!contentfulFilmContent.data
	) {
		return null;
	}

	if (contentfulFilmContent.error) {
		console.error(contentfulFilmContent.error);
		return null;
	}

	return {
		header: contentfulFilmContent.data['fields'].heading,
		filmList: movieSlidePropsMapper(
			contentfulFilmContent.data['fields'].movies
		),
	};
};
