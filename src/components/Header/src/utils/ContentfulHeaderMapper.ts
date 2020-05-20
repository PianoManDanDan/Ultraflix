import { HookResponse } from 'react-contentful';
import { contentfulImageMapper } from '../../../Image/src';
import { HeaderProps } from '..';

export const contentfulHeaderMapper = (
	headerContent: HookResponse
): HeaderProps | null => {
	try {
		if (!headerContent.data) {
			throw new Error('No data in reponse');
		}
		if (!headerContent.data['fields'].logo) {
			throw new Error('No logo in response');
		}
	} catch (err) {
		console.error(err);
		return null;
	}
	return {
		logo: contentfulImageMapper(headerContent.data['fields'].logo),
	};
};
