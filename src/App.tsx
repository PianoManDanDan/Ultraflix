import React from 'react';
import { useContentful, HookResponse } from 'react-contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import logo from './logo.svg';
import './App.scss';

export const App: React.FC<{}> = () => {
	/* johnDoe can be destructured to { data, error, fetched, loading } */
	const johnDoe: HookResponse = useContentful({
		id: '15jwOBqpxqSAOy2eOO4S0m',
	});

	if (johnDoe.loading || !johnDoe.fetched) {
		return null;
	}

	if (johnDoe.error) {
		console.error(johnDoe.error);
		return null;
	}

	if (!johnDoe.data) {
		return <p>Page does not exist.</p>;
	}

	if (johnDoe.data) {
		console.log(johnDoe.data['fields']);
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<p>
					{johnDoe.data['fields'].name} is a {johnDoe.data['fields'].title} at{' '}
					{johnDoe.data['fields'].company}.
				</p>
				<div
					dangerouslySetInnerHTML={{
						__html: documentToHtmlString(johnDoe.data['fields'].longBio),
					}}
				/>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
