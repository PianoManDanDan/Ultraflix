import { useEffect, useState } from 'react';
import { Movie } from '../types';

const fetchData = async (endpoints, options = {}, setResponse) => {
	try {
		return await Promise.all(
			endpoints.map((endpoint) =>
				fetch(
					'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' +
						endpoint,
					options
				).then((res) => res.text())
			)
		).then((data) => setResponse(data));
	} catch (error) {
		console.log(error);
	}
	return null;
};

export const useGetMovies = (movieIds: string[]): Movie[] => {
	const [response, setResponse] = useState([]);

	const options = {
		headers: {
			'x-rapidapi-host':
				'imdb-internet-movie-database-unofficial.p.rapidapi.com',
			'x-rapidapi-key': '137e6c38d3msh643f9d2213419a5p18b6f7jsn2b8b38111a54',
			'useQueryString': true,
		},
	};

	useEffect(() => {
		fetchData(movieIds, options, setResponse);
	}, []);

	return response;
};
