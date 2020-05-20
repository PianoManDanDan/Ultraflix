import { HookResponse, useContentful } from 'react-contentful';
import { FooterProps } from '..';
import { contentfulFooterMapper } from '.';

export const useGetContentfulFooter = (
	contentfulID: string
): FooterProps | null => {
	const contentfulFooter: HookResponse = useContentful({
		id: contentfulID,
	});

	if (contentfulFooter.loading || !contentfulFooter.fetched) {
		return null;
	}

	if (contentfulFooter.error) {
		console.error(contentfulFooter.error);
		return null;
	}

	return contentfulFooterMapper(contentfulFooter);
};
