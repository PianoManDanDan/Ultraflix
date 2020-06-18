export const getMovieFromImdb = async (movieId: string) => {
	try {
		const response = await fetch(
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
		);

		return await response.json();
	} catch (err) {
		console.error(err);
		return null;
	}
};

export const getMoviesFromImdb = (movieIds: string[]) =>
	Promise.all(movieIds.map((movieId) => getMovieFromImdb(movieId)));
