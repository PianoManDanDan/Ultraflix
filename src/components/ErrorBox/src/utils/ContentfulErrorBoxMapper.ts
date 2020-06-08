import { ErrorBoxProps } from '..';

export const contentfulErrorBoxMapper = (
	errorBoxContent: object
): ErrorBoxProps => ({
	errorCode: errorBoxContent['fields'].errorCode,
	heading: errorBoxContent['fields'].heading,
	message: errorBoxContent['fields'].message,
});
