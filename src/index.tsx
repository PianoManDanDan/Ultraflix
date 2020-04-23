import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
	ContentfulClient,
	ContentfulProvider,
	ContentfulClientInterface,
} from 'react-contentful';
import * as serviceWorker from './serviceWorker';
import { HomePage } from './pages';

const contentfulClient: ContentfulClientInterface = ContentfulClient({
	accessToken: 'im2Om8TMefwnoIwcZsknuuh3mKseOiNucWFLwjsJKYg',
	space: 'v9yjf2k31vk7',
});

ReactDOM.render(
	<React.StrictMode>
		<ContentfulProvider client={contentfulClient}>
			<HomePage />
		</ContentfulProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
