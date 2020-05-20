import { HookResponse } from 'react-contentful';
import { FooterProps } from '..';
import { contentfulImageMapper } from '../../../Image/src';

export const contentfulFooterMapper = (
	footerContent: HookResponse
): FooterProps | null => {
	try {
		if (!footerContent.data) {
			throw new Error('No data in reponse');
		}
		if (!footerContent.data['fields'].copyrightText) {
			throw new Error('No copyrightText in response');
		}
		if (!footerContent.data['fields'].logo) {
			throw new Error('No logo in response');
		}
		if (!footerContent.data['fields'].companyText) {
			throw new Error('No companyText in response');
		}
	} catch (err) {
		console.error(err);
		return null;
	}
	return {
		copyrightText: footerContent.data['fields'].copyrightText,
		logo: contentfulImageMapper(footerContent.data['fields'].logo),
		companyText: footerContent.data['fields'].companyText,
	};
};
