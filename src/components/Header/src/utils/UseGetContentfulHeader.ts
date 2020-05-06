import { HookResponse, useContentful } from 'react-contentful';
import { HeaderProps } from '../types';
import { contentfulHeaderMapper } from '.';

export const useGetContentfulHeader = (
	contentfulID: string
): HeaderProps | null => {
	const contentfulHeader: HookResponse = useContentful({
		id: contentfulID,
	});

	if (
		contentfulHeader.loading ||
		!contentfulHeader.fetched ||
		!contentfulHeader.data
	) {
		return null;
	}

	if (contentfulHeader.error) {
		console.error(contentfulHeader.error);
		return null;
	}

	return contentfulHeaderMapper(contentfulHeader);
};
