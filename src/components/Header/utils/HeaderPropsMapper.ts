import { imagePropsMapper } from '../../Image/src/utils';
import { HeaderProps } from '../src/types';

export const headerPropsMapper = (headerContent: any): HeaderProps => {
	return {
		logo: imagePropsMapper(headerContent.data['fields'].logo['fields']),
	};
};
