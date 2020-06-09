import { Movie } from '../../../../../../../types';
import { contentfulImageMapper } from '../../../../../../Image/src';

// const calculateRuntime = (contentfulTime: string): string => {
// 	const time: string =
// 		contentfulTime
// 			.split(':')
// 			.map((num) => parseInt(num, 10).toString())
// 			.join(' HR ') + ' MIN';
// 	return time;
// };

export const contentfulMovieIdsMapper = (
	contentfulMovies: object[]
): string[] => contentfulMovies.map((movie) => movie['fields'].id);
