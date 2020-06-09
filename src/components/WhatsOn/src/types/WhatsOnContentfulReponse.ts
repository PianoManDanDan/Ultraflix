import { WhatsOnProps } from '.';

export type WhatsOnContenfulReponse = Omit<WhatsOnProps, 'movieList'> & {
	movieIds: string[];
};
