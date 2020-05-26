import { HookResponse, useContentful } from 'react-contentful';
import { FooterProps } from '..';
import { contentfulFooterMapper } from '.';

export const useGetContentfulFooter = (
	contentfulID: string
): FooterProps | null => {
	const contentfulResponse: HookResponse = useContentful({
		id: contentfulID,
	});

	if (
		contentfulResponse.loading ||
		!contentfulResponse.fetched ||
		!contentfulResponse.data
	) {
		return null;
	}

	if (contentfulResponse.error) {
		console.error(contentfulResponse.error);
		return null;
	}

	try {
		return contentfulFooterMapper(contentfulResponse.data);
	} catch (err) {
		console.error('Cannot retrieve Footer content');
		console.error(err);
		return null;
	}
};
