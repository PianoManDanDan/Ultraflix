import React from 'react';
import { render } from '@testing-library/react';
import { HookResponse } from 'react-contentful/types';
import { App } from './App';

jest.mock('react-contentful', () => ({
	useContentful: (): HookResponse => ({
		data: {
			fields: {
				name: 'Test',
				title: 'Mr',
				company: 'Test Inc',
			},
		},
		error: undefined,
		fetched: true,
		loading: false,
	}),
}));

test('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
