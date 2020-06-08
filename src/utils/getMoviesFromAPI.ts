import { useEffect, useState } from 'react';
import { Movie } from '../types';

const fetchData = async (endPoint, options = {}) => {
	const url =
		'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' +
		endPoint;

	try {
		return await fetch(url, options).then((res) => {
			return res.json();
		});
	} catch (error) {
		console.log(error);
	}
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

	Promise.all(movieIds.map(id => fetchData(id))).then(response => {setResponse(response)})

	Promise.all(
		movieIds.forEach((id) => {
			fetch('')
		});
	)

	useEffect(() => {


	}, [movieIds, options]);

	return response;
};

export const getidFromimdb = (title: string): void => {
	const unirest = require('unirest');

	const req = unirest(
		'GET',
		'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/' +
			title
	);

	req.headers({
		'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
		'x-rapidapi-key': '137e6c38d3msh643f9d2213419a5p18b6f7jsn2b8b38111a54',
		'useQueryString': true,
	});

	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});
};
