import { ImageProps } from '..';

export const contentfulImageMapper = (contentfulImage: object): ImageProps => ({
	url: contentfulImage['fields'].file.url,
	description: contentfulImage['fields'].description || '',
});
