import { ContentfulMovie, Movie } from '../../types';

export const mockContentfulMovieResponse1 = {
	sys: {
		id: 'firstContentfulId',
	},
	fields: {
		id: 'firstImbdId',
		certificate: 'U',
	},
};

export const mockMappedContentfulMovie1: ContentfulMovie = {
	contentfulId: 'firstContentfulId',
	imdbId: 'firstImbdId',
	certificate: 'U',
};

export const mockImdbMovieResponse1 = {
	id: 'firstImbdId',
	title: "Surf's Up",
	poster:
		'https://m.media-amazon.com/images/M/MV5BMjE4NDE3NzcwM15BMl5BanBnXkFtZTcwMTI0ODYzMw@@.jpg',
	length: '1h 25min',
	year: '2007',
	plot:
		'A behind-the-scenes look at the annual Penguin World Surfing Championship, and its newest participant, up-and-comer Cody Maverick.',
	rating: '6.7',
};

export const mockMappedMovie1: Movie = {
	...mockMappedContentfulMovie1,
	title: "Surf's Up",
	posterImage: {
		url:
			'https://m.media-amazon.com/images/M/MV5BMjE4NDE3NzcwM15BMl5BanBnXkFtZTcwMTI0ODYzMw@@.jpg',
		description: "Surf's Up poster image",
	},
	runtime: '1h 25min',
	releaseYear: 2007,
	description:
		'A behind-the-scenes look at the annual Penguin World Surfing Championship, and its newest participant, up-and-comer Cody Maverick.',
	rating: 6.7,
};

export const mockContentfulMovieResponse2 = {
	sys: {
		id: 'secondContentfulId',
	},
	fields: {
		id: 'secondImbdId',
		certificate: '12A',
	},
};

export const mockMappedContentfulMovie2: ContentfulMovie = {
	contentfulId: 'secondContentfulId',
	imdbId: 'secondImbdId',
	certificate: '12A',
};

export const mockImdbMovieResponse2 = {
	id: 'secondImbdId',
	title: 'Penguins',
	poster:
		'https://m.media-amazon.com/images/M/MV5BMTk5NDExMzMxMV5BMl5BanBnXkFtZTcwODA5NjY0OQ@@.jpg',
	length: '1h 18min',
	year: '2012',
	plot:
		'Narrated by David Attenborough, "Penguins 3D" celebrates the destiny of a very special King Penguin, who returns to his birthplace in the sub-Antarctic. Known as Penguin City, the island is...  »',
	rating: '6.7',
};

export const mockMappedMovie2: Movie = {
	...mockMappedContentfulMovie2,
	title: 'Penguins',
	posterImage: {
		url:
			'https://m.media-amazon.com/images/M/MV5BMTk5NDExMzMxMV5BMl5BanBnXkFtZTcwODA5NjY0OQ@@.jpg',
		description: 'Penguins poster image',
	},
	runtime: '1h 18min',
	releaseYear: 2012,
	description:
		'Narrated by David Attenborough, "Penguins 3D" celebrates the destiny of a very special King Penguin, who returns to his birthplace in the sub-Antarctic. Known as Penguin City, the island is...  »',
	rating: 6.7,
};
