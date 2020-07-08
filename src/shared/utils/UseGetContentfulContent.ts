import { useContentful } from 'react-contentful';
import { ContentfulResponse } from '../types';

export const useGetContentfulContent = (
	contentfulID: string
): ContentfulResponse => {
	const { loading, error, data } = useContentful({
		id: contentfulID,
	});

	if (error) {
		console.error(error);
	}

	return {
		loading,
		error: !!error,
		data,
	};
};
