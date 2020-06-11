import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	ContentfulClient,
	ContentfulProvider,
	ContentfulClientInterface,
} from 'react-contentful';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { HomePage, NotFoundPage, MovieDetailsPage } from './pages';
import './index.scss';

const contentfulClient: ContentfulClientInterface = ContentfulClient({
	accessToken: 'im2Om8TMefwnoIwcZsknuuh3mKseOiNucWFLwjsJKYg',
	space: 'v9yjf2k31vk7',
});

ReactDOM.render(
	<React.StrictMode>
		<ContentfulProvider client={contentfulClient}>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/movies/:contentfulID" component={MovieDetailsPage} />
					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
			</Router>
		</ContentfulProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
