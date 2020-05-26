import { contentfulImageMapper } from '../../../Image/src';
import { HeaderProps } from '..';

export const contentfulHeaderMapper = (headerContent: object): HeaderProps => ({
	logo: contentfulImageMapper(headerContent['fields'].logo),
});
