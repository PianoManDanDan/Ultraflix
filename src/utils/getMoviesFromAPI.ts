import { Movie } from '../types';

export const getMovieById = (movieId: string): Movie => {
	var unirest = require("unirest");
	var req = unirest("GET", "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + movieId);
	const movie: Movie = {
		posterImage:
		{
			url: ''
		},
		title: '',
		runtime: '',
		certificate: '',
		releaseYear: Number('1995'),
		description: '',
		rating: Number('')
	};

	req.headers({
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "137e6c38d3msh643f9d2213419a5p18b6f7jsn2b8b38111a54",
		"useQueryString": true
	});

	req.end(function (res) {
		if (res.error) throw new Error(res.error);
		movie.title = res.body.title;
		movie.posterImage.url = res.body.poster;
		movie.runtime = "";
		movie.description = res.body.plot;
		movie.releaseYear = Number(res.body.year);
		movie.rating = Number(res.body.rating);
	});

	return movie;
}

export const getidFromimdb = (title: string): void => {
	var unirest = require("unirest");

	var req = unirest("GET", "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + title);

	req.headers({
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "137e6c38d3msh643f9d2213419a5p18b6f7jsn2b8b38111a54",
		"useQueryString": true
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});
}
