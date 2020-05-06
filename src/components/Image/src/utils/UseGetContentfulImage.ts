import { HookResponse, useContentful } from 'react-contentful';
import { ImageProps } from '../types';
import { contentfulImageMapper } from '.';

export const useGetContentfulImage = (
	contentfulID: string
): ImageProps | null => {
	const contentfulImage: HookResponse = useContentful({
		id: contentfulID,
	});

	if (
		contentfulImage.loading ||
		!contentfulImage.fetched ||
		!contentfulImage.data
	) {
		return null;
	}

	if (contentfulImage.error) {
		console.error(contentfulImage.error);
		return null;
	}

	return contentfulImageMapper(contentfulImage);
};
