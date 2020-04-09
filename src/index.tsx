import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	ContentfulClient,
	ContentfulProvider,
	ContentfulClientInterface,
} from 'react-contentful';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

const contentfulClient: ContentfulClientInterface = ContentfulClient({
	accessToken: 'im2Om8TMefwnoIwcZsknuuh3mKseOiNucWFLwjsJKYg',
	space: 'v9yjf2k31vk7',
});

ReactDOM.render(
	<React.StrictMode>
		<ContentfulProvider client={contentfulClient}>
			<App />
		</ContentfulProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
