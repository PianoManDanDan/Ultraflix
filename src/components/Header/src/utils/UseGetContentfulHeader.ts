import { HookResponse, useContentful } from 'react-contentful';
import { HeaderProps } from '..';
import { contentfulHeaderMapper } from '.';

export const useGetContentfulHeader = (
	contentfulID: string
): HeaderProps | null => {
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
		return contentfulHeaderMapper(contentfulResponse.data);
	} catch (err) {
		console.error('Cannot retrieve Header content');
		console.error(err);
		return null;
	}
};
