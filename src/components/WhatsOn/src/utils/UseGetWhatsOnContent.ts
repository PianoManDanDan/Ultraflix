import { useState } from 'react';
import { WhatsOnProps } from '../types';
import {
	getMovieListFromImdb,
	imdbMovieListMapper,
	useGetContentfulContent,
	contentfulMovieListMapper,
} from '../../../../shared/utils';
import { whatsOnContentMapper } from '.';
import { Movie } from '../../../../shared/types';

export const useGetWhatsOnContent = (
	contentfulId: string
): WhatsOnProps | null => {
	const contentfulResponse = useGetContentfulContent(contentfulId);
	const contentfulData = contentfulResponse.data;
	let contentfulMovieList;

	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [gettingMovieListFromImdb, setGettingMovieListFromImdb] = useState(
		false
	);

	try {
		if (contentfulData) {
			contentfulMovieList = contentfulMovieListMapper(
				contentfulData['fields'].items
			);
		}

		if (contentfulMovieList && !gettingMovieListFromImdb) {
			setGettingMovieListFromImdb(true);

			getMovieListFromImdb(contentfulMovieList).then((imdbMovieList) => {
				setMovieList(imdbMovieListMapper(contentfulMovieList, imdbMovieList));
			});
		}

		if (!contentfulData || !movieList) {
			return null;
		}

		return { ...whatsOnContentMapper(contentfulData), movieList };
	} catch (err) {
		console.error(err);
		return null;
	}
};
