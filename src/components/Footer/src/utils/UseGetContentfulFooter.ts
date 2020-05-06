import { HookResponse, useContentful } from 'react-contentful';
import { FooterProps } from '../types';
import { contentfulFooterMapper } from './ContentfulFooterMapper';

export const useGetContentfulFooter = (
	contentfulID: string
): FooterProps | null => {
	const contentfulFooter: HookResponse = useContentful({
		id: contentfulID,
	});

	if (
		contentfulFooter.loading ||
		!contentfulFooter.fetched ||
		!contentfulFooter.data
	) {
		return null;
	}

	if (contentfulFooter.error) {
		console.error(contentfulFooter.error);
		return null;
	}

	return contentfulFooterMapper(contentfulFooter);
};
