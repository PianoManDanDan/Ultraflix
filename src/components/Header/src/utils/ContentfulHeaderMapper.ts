import { contentfulImageMapper } from '../../../Image/src/utils';
import { HeaderProps } from '../types';

export const contentfulHeaderMapper = (headerContent: any): HeaderProps => {
	return {
		logo: contentfulImageMapper(headerContent.data['fields'].logo['fields']),
	};
};
