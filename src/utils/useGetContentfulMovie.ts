import { useContentful, HookResponse } from 'react-contentful';
import { Movie } from '../types';
import { contentfulMovieMapper } from '.';

export const useGetContentfulMovie = (contentfulID: string): Movie | null => {
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
		return contentfulMovieMapper(contentfulResponse.data);
	} catch (err) {
		console.error('Cannot retrieve WhatsOn Content');
		console.error(err);
		return null;
	}
};
