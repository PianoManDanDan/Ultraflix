import { ImageProps } from '../types';

export const contentfulImageMapper = (contentfulImage: any): ImageProps => {
	const image: ImageProps = {
		url: contentfulImage.file.url,
		description: contentfulImage.description || '',
	};
	return image;
};
