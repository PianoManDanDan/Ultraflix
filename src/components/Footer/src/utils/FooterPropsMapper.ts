import { FooterProps } from '../types';
import { imagePropsMapper } from '../../../Image/src/utils';

export const footerPropsMapper = (footerContent: any): FooterProps => {
	return {
		copyrightText: footerContent.data['fields'].copyrightText,
		logo: imagePropsMapper(footerContent.data['fields'].logo['fields']),
		companyText: footerContent.data['fields'].companyText,
	};
};
