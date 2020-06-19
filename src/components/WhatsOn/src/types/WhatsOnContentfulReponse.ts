import { WhatsOnProps } from '.';
import { ContentfulMovie } from '../../../../shared/types';

export type WhatsOnContenfulReponse = Omit<WhatsOnProps, 'movieList'> & {
	movieList: ContentfulMovie[];
};
