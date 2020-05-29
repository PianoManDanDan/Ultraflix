import { MovieSlideProps } from '..';
import { contentfulImageMapper } from '../../../../../../Image/src';

const calculateRuntime = (contentfulTime: string): string => {
	const time: string =
		contentfulTime
			.split(':')
			.map((num) => parseInt(num, 10).toString())
			.join(' HR ') + ' MIN';
	return time;
};

export const contentfulMovieListMapper = (
	contentfulMovies: object[]
): MovieSlideProps[] =>
	contentfulMovies.map((movie) => ({
		posterImage: contentfulImageMapper(movie['fields'].posterImage),
		title: movie['fields'].title,
		runtime: calculateRuntime(movie['fields'].runtime),
		certificate: movie['fields'].certificate,
		releaseYear: movie['fields'].releaseYear,
	}));
