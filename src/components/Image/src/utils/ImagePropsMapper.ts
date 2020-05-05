import { ImageProps } from '../types';

export const ImagePropsMapper = (contentfulImage: any): ImageProps => {
	const mappedContent: ImageProps = {
		url: contentfulImage.file.url,
		description: contentfulImage.description || '',
	};
	return mappedContent;
};
