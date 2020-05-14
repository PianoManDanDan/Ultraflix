import { FooterProps } from '../types';
import { contentfulImageMapper } from '../../../Image/src/utils';

export const contentfulFooterMapper = (footerContent: any): FooterProps => {
	return {
		copyrightText: footerContent.data['fields'].copyrightText,
		logo: contentfulImageMapper(footerContent.data['fields'].logo),
		companyText: footerContent.data['fields'].companyText,
	};
};
