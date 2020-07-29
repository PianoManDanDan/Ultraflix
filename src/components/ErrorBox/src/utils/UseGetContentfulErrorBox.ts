import { HookResponse, useContentful } from 'react-contentful';
import { ErrorBoxProps } from '..';
import { contentfulErrorMapper } from '.';

export const useGetContentfulError = (
	contentfulID: string
): (ErrorBoxProps & { pageTitle: string }) | null => {
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
		return contentfulErrorMapper(contentfulResponse.data);
	} catch (err) {
		console.error('Cannot retrieve ErrorBox content');
		console.error(err);
		return null;
	}
};
