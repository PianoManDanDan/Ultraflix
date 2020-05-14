import { ImageProps } from '../types';

export const contentfulImageMapper = (contentfulImage: any): ImageProps => {
	return {
		url: contentfulImage['fields']?.file.url,
		description: contentfulImage['fields']?.description || '',
	};
};
