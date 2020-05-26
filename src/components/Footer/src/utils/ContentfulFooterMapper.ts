import { FooterProps } from '..';
import { contentfulImageMapper } from '../../../Image/src';

export const contentfulFooterMapper = (footerContent: object): FooterProps => ({
	copyrightText: footerContent['fields'].copyrightText,
	logo: contentfulImageMapper(footerContent['fields'].logo),
	companyText: footerContent['fields'].companyText,
});
