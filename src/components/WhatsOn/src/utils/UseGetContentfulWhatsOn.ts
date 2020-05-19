import { HookResponse, useContentful } from 'react-contentful';
import { WhatsOnProps } from '..';
import { contentfulWhatsOnMapper } from '.';

export const useGetContentfulWhatsOn = (
	contentfulID: string
): WhatsOnProps | null => {
	const contentfulResponse: HookResponse = useContentful({
		id: contentfulID,
	});

	if (contentfulResponse.loading || !contentfulResponse.fetched) {
		return null;
	}

	if (contentfulResponse.error) {
		console.error(contentfulResponse.error);
		return null;
	}

	return contentfulWhatsOnMapper(contentfulResponse);
};
