import { useEffect, useState } from 'react';
import { Movie } from '../types';

export const useGetMovies = (movieIds: string[]): Movie[] => {
	const [data, setData] = useState([]);

	useEffect(() => {
		Promise.all(
			movieIds.map((endpoint) =>
				fetch(
					'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' +
						endpoint,
					{
						headers: {
							'x-rapidapi-host':
								'imdb-internet-movie-database-unofficial.p.rapidapi.com',
							'x-rapidapi-key':
								'6970e07b1fmsh52f95ea014a5d4ep1f7143jsn437a856e55c7',
						},
					}
				).then((res) => res.text())
			)
		).then((res) => console.log(res));
	}, []);

	return data;
};
