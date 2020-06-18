import { WhatsOnProps } from '.';
import { ContentfulMovie } from '../../../../types';

export type WhatsOnContenfulReponse = Omit<WhatsOnProps, 'movieList'> & {
	movieList: ContentfulMovie[];
};
