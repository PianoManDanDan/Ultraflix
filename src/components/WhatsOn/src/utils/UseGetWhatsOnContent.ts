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

export const useGetWhatsOnContent = (contentfulID): WhatsOnProps | null => {
	const contentfulResponse = useGetContentfulContent(contentfulID);
	const contentfulData = contentfulResponse.data;
	let contentfulMovieList;

	try {
		if (contentfulData) {
			contentfulMovieList = contentfulMovieListMapper(
				contentfulData['fields'].items
			);
		}
	} catch (err) {
		console.error(err);
	}

	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [gettingMovieListFromImdb, setGettingMovieListFromImdb] = useState(
		false
	);

	if (contentfulMovieList && !gettingMovieListFromImdb) {
		setGettingMovieListFromImdb(true);

		try {
			getMovieListFromImdb(contentfulMovieList).then((imdbMovieList) => {
				setMovieList(imdbMovieListMapper(contentfulMovieList, imdbMovieList));
			});
		} catch (err) {
			console.error(err);
		}
	}

	if (!contentfulData || !movieList) {
		return null;
	}

	try {
		return whatsOnContentMapper(contentfulData, movieList);
	} catch (err) {
		return null;
	}
};
