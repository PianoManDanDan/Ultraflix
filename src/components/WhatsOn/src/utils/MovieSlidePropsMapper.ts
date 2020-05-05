import { MovieSlideProps } from '../subcomponents/MovieSlide/src/types';
import { imagePropsMapper } from '../../../Image/src/utils';

const calculateRuntime = (contentfulTime: string): string => {
	const time: string =
		contentfulTime
			.split(':')
			.map((num) => parseInt(num, 10).toString())
			.join(' HR ') + ' MIN';
	return time;
};

export const movieSlidePropsMapper = (contentfulMovies: any[]) => {
	const mappedContent: MovieSlideProps[] = contentfulMovies.map((movie) => {
		const mappedMovie: MovieSlideProps = {
			posterImage: imagePropsMapper(movie['fields'].posterImage['fields']),
			title: movie['fields'].title,
			runtime: calculateRuntime(movie['fields'].runtime),
			certificate: movie['fields'].certificate,
			releaseYear: movie['fields'].releaseYear,
		};
		return mappedMovie;
	});
	return mappedContent;
};
