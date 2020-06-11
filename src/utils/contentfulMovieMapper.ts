import { Movie } from '../types';
import { contentfulImageMapper } from '../components/Image/src';

const calculateRuntime = (contentfulTime: string): string => {
	const time: string =
		contentfulTime
			.split(':')
			.map((num) => parseInt(num, 10).toString())
			.join(' HR ') + ' MIN';
	return time;
};

export const contentfulMovieMapper = (contentfulMovie: object): Movie => {
	return {
		posterImage: contentfulImageMapper(contentfulMovie['fields'].posterImage),
		title: contentfulMovie['fields'].title,
		runtime: calculateRuntime(contentfulMovie['fields'].runtime),
		certificate: contentfulMovie['fields'].certificate,
		releaseYear: contentfulMovie['fields'].releaseYear,
		description: contentfulMovie['fields'].description,
		rating: contentfulMovie['fields'].rating,
	};
};
