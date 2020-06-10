import { ErrorBoxProps } from '..';

export const contentfulErrorMapper = (
	errorBoxContent: object
): ErrorBoxProps & { pageTitle: string } => ({
	pageTitle: errorBoxContent['fields'].title,
	errorCode: errorBoxContent['fields'].errorCode,
	heading: errorBoxContent['fields'].heading,
	message: errorBoxContent['fields'].message,
});
