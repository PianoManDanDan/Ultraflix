import { ImageProps } from '../types';

export const imagePropsMapper = (contentfulImage: any): ImageProps => {
	const mappedContent: ImageProps = {
		url: contentfulImage.file.url,
		description: contentfulImage.description || '',
	};
	return mappedContent;
};
