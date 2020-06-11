import { contentfulImageMapper } from '../components/Image/src';
import { Movie } from '../types';

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
		contentfulID: contentfulMovie['sys'].id,
		posterImage: contentfulImageMapper(contentfulMovie['fields'].posterImage),
		title: contentfulMovie['fields'].title,
		runtime: calculateRuntime(contentfulMovie['fields'].runtime),
		certificate: contentfulMovie['fields'].certificate,
		releaseYear: contentfulMovie['fields'].releaseYear,
		description: contentfulMovie['fields'].description,
		rating: contentfulMovie['fields'].rating,
	};
};
