import { MovieSlideProps } from '../types';
import { contentfulImageMapper } from '../../../../../../Image/src';

const calculateRuntime = (contentfulTime: string): string => {
	const time: string =
		contentfulTime
			.split(':')
			.map((num) => parseInt(num, 10).toString())
			.join(' HR ') + ' MIN';
	return time;
};

export const movieSlidePropsMapper = (
	contentfulMovies: any[]
): MovieSlideProps[] => {
	return contentfulMovies.map((movie) => {
		return {
			posterImage: contentfulImageMapper(movie['fields'].posterImage),
			title: movie['fields'].title,
			runtime: calculateRuntime(movie['fields'].runtime),
			certificate: movie['fields'].certificate,
			releaseYear: movie['fields'].releaseYear,
		};
	});
};
