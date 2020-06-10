import { useState, useEffect } from 'react';

export const useGetMovies = (movieIds: string[]) => {
	const [result, setResult] = useState<any[]>([]);

	useEffect(() => {
		Promise.all(
			movieIds.map((movieId) =>
				fetch(
					'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' +
						movieId,
					{
						headers: {
							'x-rapidapi-host':
								'imdb-internet-movie-database-unofficial.p.rapidapi.com',
							'x-rapidapi-key':
								'6970e07b1fmsh52f95ea014a5d4ep1f7143jsn437a856e55c7',
						},
					}
				).then((res) => res.json())
			)
		).then((res) => setResult(res));
	}, []);

	return result;
};
